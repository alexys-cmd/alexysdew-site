/* Draws each scalloped edge as an exact ring of circles sized to the element,
   so the circles meet evenly at every edge in every browser (Safari rounds
   repeating CSS patterns and can slice the last column). The CSS pattern in
   site.css stays as the fallback if this script doesn't run. */
(function(){
  var els=[].slice.call(document.querySelectorAll('.scallop'));
  if(!els.length) return;
  function paint(el){
    var cs=getComputedStyle(el);
    var r=parseFloat(cs.getPropertyValue('--r'))||6;
    var color=(cs.getPropertyValue('--paper')||'#FBF8F2').trim();
    var W=el.offsetWidth+2*r, H=el.offsetHeight+2*r;
    if(W<4*r||H<4*r) return;
    var nx=Math.max(2,Math.round(W/(2*r))), ny=Math.max(2,Math.round(H/(2*r)));
    var dx=W/nx, dy=H/ny, cr=Math.min(dx,dy)/2*0.96, c=[];
    for(var i=0;i<nx;i++){var x=(i+.5)*dx;c.push([x,dy/2],[x,H-dy/2]);}
    for(var j=1;j<ny-1;j++){var y=(j+.5)*dy;c.push([dx/2,y],[W-dx/2,y]);}
    var svg='<svg xmlns="http://www.w3.org/2000/svg" width="'+W.toFixed(2)+'" height="'+H.toFixed(2)+'" viewBox="0 0 '+W.toFixed(2)+' '+H.toFixed(2)+'"><g fill="'+color+'">'+
      c.map(function(p){return '<circle cx="'+p[0].toFixed(2)+'" cy="'+p[1].toFixed(2)+'" r="'+cr.toFixed(2)+'"/>';}).join('')+'</g></svg>';
    el.style.setProperty('--scallop-img','url("data:image/svg+xml,'+encodeURIComponent(svg)+'")');
    el.classList.add('scallop-js');
  }
  var ro='ResizeObserver' in window ? new ResizeObserver(function(es){es.forEach(function(e){paint(e.target);});}) : null;
  els.forEach(function(el){paint(el); if(ro) ro.observe(el);});
  if(!ro) window.addEventListener('resize',function(){els.forEach(paint);});
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(function(){els.forEach(paint);});
})();

/* Hide any header sticker that touches the headline, intro text or buttons.
   Measured with the real fonts after they load, and again on every resize. */
(function(){
  var hero=document.querySelector('.hero'); if(!hero) return;
  var stickers=[].slice.call(hero.querySelectorAll('.sticker')); if(!stickers.length) return;
  function textRects(){
    var out=[], tw=document.createTreeWalker(hero,NodeFilter.SHOW_TEXT), n;
    while((n=tw.nextNode())){
      if(!n.textContent.trim()||n.parentElement.closest('.sticker')) continue;
      var r=document.createRange(); r.selectNodeContents(n);
      [].push.apply(out,[].slice.call(r.getClientRects()));
    }
    [].forEach.call(hero.querySelectorAll('.btn,.eyebrow'),function(b){out.push(b.getBoundingClientRect());});
    return out;
  }
  function check(){
    stickers.forEach(function(s){s.style.visibility='';});
    var rects=textRects(), pad=6;
    stickers.forEach(function(s){
      if(getComputedStyle(s).display==='none') return;
      var a=s.getBoundingClientRect();
      var hit=rects.some(function(t){return a.left<t.right+pad&&a.right>t.left-pad&&a.top<t.bottom+pad&&a.bottom>t.top-pad;});
      if(hit) s.style.visibility='hidden';
    });
  }
  check();
  window.addEventListener('resize',check);
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(check);
  window.addEventListener('load',check);
})();
