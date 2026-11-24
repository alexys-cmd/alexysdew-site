// Adds new Medium posts to js/posts.js. Existing posts are never removed or changed,
// so older articles stay on the site even after they drop out of Medium's feed.
// Runs daily via .github/workflows/medium-sync.yml. Test: node scripts/sync-medium.mjs [feed.xml]
import fs from 'node:fs';
import vm from 'node:vm';

const FEED = 'https://medium.com/feed/@alexys.dew';
const FILE = new URL('../js/posts.js', import.meta.url);

const decode = s => s
  .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&quot;/g, '"').replace(/&apos;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
const tag = (xml, name) => { const m = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`)); return m ? m[1] : ''; };
const text = html => decode(html.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
const straight = s => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');

const xml = process.argv[2] ? fs.readFileSync(process.argv[2], 'utf8')
  : await (await fetch(FEED, { headers: { 'user-agent': 'alexysdew.com blog sync' } })).text();
if (!xml.includes('<item>')) { console.log('Feed had no posts; nothing changed.'); process.exit(0); }

const src = fs.readFileSync(FILE, 'utf8');
const ctx = { window: {} }; vm.runInNewContext(src, ctx);
const posts = ctx.window.POSTS;
const known = new Set(posts.map(p => p.url));

let added = 0;
for (const item of xml.split('<item>').slice(1)) {
  const url = decode(tag(item, 'link')).split('?')[0].trim();
  if (!url || known.has(url)) continue;
  const body = decode(tag(item, 'content:encoded'));
  const firstP = [...body.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map(m => text(m[1])).find(t => t.length > 30) || '';
  const excerpt = (firstP.match(/^.+?[.!?](?=\s|$)/) || [firstP])[0];
  const cover = (body.match(/<img[^>]+src="([^"]+)"/) || [])[1] || '';
  const date = new Date(text(tag(item, 'pubDate'))).toISOString().slice(0, 10);
  posts.push({ title: straight(text(tag(item, 'title'))), date, excerpt: straight(excerpt), url, cover, tags: [] });
  known.add(url); added++;
}
if (!added) { console.log('No new posts.'); process.exit(0); }

posts.sort((a, b) => b.date.localeCompare(a.date));
const header = src.slice(0, src.indexOf('window.POSTS'));
const q = s => JSON.stringify(s);
const out = header + 'window.POSTS = [\n' + posts.map(p =>
  `  { title: ${q(p.title)}, date: ${q(p.date)},\n    excerpt: ${q(p.excerpt)},\n    url: ${q(p.url)},\n    cover: ${q(p.cover || '')}, tags: ${JSON.stringify(p.tags || [])} }`
).join(',\n') + '\n];\n';
fs.writeFileSync(FILE, out);
console.log(`Added ${added} new post(s).`);
