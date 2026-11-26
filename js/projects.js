/* Portfolio projects. Copy a { ... } block to add one.
   categories: any of "Social Media & Content", "Video & Multimedia", "Academic Work", "AI & Marketing Workflows"
   images: list of image paths (first one is the thumbnail). Empty = placeholder boxes.
   agency: true adds the small line "Created while employed at So Chill Media" under each post. A section or a single post can override it
     with agency:true or agency:false. Leave agency false for Animal HealthCare Center, school work and your own projects.
   highlights: optional list of short phrases shown as tags under the description.
   note: optional small line under the description.
   sections: optional. Splits a project into labeled groups, each with its own title, label, role, agency and posts
     (used by Sports). A section with no posts is hidden, so nothing shows until you add real work.
   posts: the work shown inside the project, in order (first one becomes the card cover):
     { type:"post", brand:"handle", avatar:"AB", caption:"...", image:"images/work/file.webp" }
     { type:"carousel", brand:"handle", avatar:"AB", caption:"...", slides:["images/work/1.webp","images/work/2.webp"] }
     { type:"reel", brand:"handle", avatar:"AB", caption:"...", video:"images/work/file.mp4", poster:"images/work/file.webp" }
     { type:"photo", image:"images/work/file.webp", alt:"what the photo shows", caption:"optional short caption" }   <- your own photography, no social frame */
window.PROJECTS = [
  { id:"vagabond", featured:true, cover:"images/work/vag-cover-main.webp", coverSide:["images/work/vag-cover-a.webp","images/work/vag-cover-b.webp"], title:"Vagabond Apparel Boutique", subtitle:"Women's fashion boutique · Palm Beach Gardens",
    categories:["Social Media & Content","Video & Multimedia"], agency:true,
    role:"Planned weekly social media content, researched trends, developed Reel concepts, and coordinated styling for Vagabond Apparel Boutique. Led creative direction on select content shoots, including outfit planning and on-set direction, and wrote captions and scheduled posts and Stories. Collaborated with editors to bring content concepts to life.",
    highlights:["Weekly content planning","Trend research","Reel concepts","Outfit styling","Shoot preparation","Creative direction on select shoots","Captions and Stories","Scheduling and collaboration with editors"],
    platforms:["Instagram","Facebook"], images:[], link:"",
    posts:[
      { type:"reel", brand:"vagabondapparelboutique", avatar:"V", caption:"honestly drop-off me and pick-up me are two different people🤪\n\nshop in store or online today!\n\n📍palm beach gardens", poster:"images/work/vag-dropoff-poster.webp", video:"images/work/vag-dropoff.mp4" },
      { type:"reel", brand:"vagabondapparelboutique", avatar:"V", caption:"don’t worry we got you covered 🤭🩷\n\n📍palm beach gardens", poster:"images/work/vag-husband-poster.webp", video:"images/work/vag-husband.mp4" },
      { type:"carousel", brand:"vagabondapparelboutique", avatar:"V", caption:"currently pretending it’s sweater weather and refusing to hear otherwise 🤎\n\nComment “Cardi” and we’ll send you the direct links!\n\n📍palm beach gardens", slides:["images/work/vag-cardi-1.webp","images/work/vag-cardi-2.webp","images/work/vag-cardi-3.webp","images/work/vag-cardi-4.webp","images/work/vag-cardi-5.webp","images/work/vag-cardi-6.webp","images/work/vag-cardi-7.webp","images/work/vag-cardi-8.webp"] },
      { type:"carousel", brand:"vagabondapparelboutique", avatar:"V", caption:"easy, colorful, and so good 🌺\n\ntap the product tags to shop now!\n\n📍palm beach gardens", slides:["images/work/vag-color-1.webp","images/work/vag-color-2.webp","images/work/vag-color-3.webp","images/work/vag-color-4.webp"] }
    ] },
  { id:"hospitality", cover:"images/work/olis-cover.webp", title:"Hospitality Collection", subtitle:"Pig Beach · Jetty's · U-Tiki · Fashion Cuisine Group",
    categories:["Social Media & Content","Video & Multimedia"], agency:true,
    role:"Created and scheduled social media posts for multiple hospitality brands, adapting captions and storytelling to each restaurant's individual voice. Selected and organized photos and videos, collaborated with editors on visual content, and supported regular publishing and Stories. Also contributed original creative concepts and select trend-based content.",
    platforms:["Instagram","Facebook"], images:[], link:"",
    posts:[
      { type:"reel", brand:"pigbeachqueens", avatar:"PB", caption:"just making sure everyone knows where dinner is at 🏴🐷🔥", poster:"images/work/pb-flag-poster.webp", video:"images/work/pb-flag.mp4" },
      { type:"carousel", brand:"jettyswaterfrontrestaurant", avatar:"J", caption:"fresh catches, waterfront cocktails + no reason to rush 🌊🍸\n\nmeet us at jetty’s waterfront for the kind of lunch that turns into dinner.", slides:["images/work/jettys-1.webp","images/work/jettys-2.webp","images/work/jettys-3.webp"] },
      { type:"reel", brand:"utikibeach", avatar:"U", caption:"volume up 🔊\njust the sounds of u-tiki\nwater, wind, and a little bit of everything in between 🌊\n\n📍 @utikibeach | jupiter, florida", poster:"images/work/utiki-asmr-poster.webp", video:"images/work/utiki-asmr.mp4" },
      { type:"carousel", brand:"olisfashioncuisine", avatar:"O", caption:"plated. no further comment necessary", slides:["images/work/olis-1.webp","images/work/olis-2.webp","images/work/olis-3.webp"] }
    ] },
  { id:"ahcc", cover:"images/work/ahcc-cover.webp", title:"Animal HealthCare Center", subtitle:"Veterinary clinic",
    categories:["Social Media & Content","Video & Multimedia"], agency:false,
    role:"Create and manage the clinic's social media content, including educational Reels, Stories, carousels, and promotional posts. Write approachable, informative veterinary content around preventive care, pet health, and seasonal topics, and promote the clinic's services and appointments.",
    platforms:["Instagram","Facebook"], images:[], link:"",
    posts:[
      { type:"carousel", brand:"animalhealthcare", avatar:"A", caption:"Bufo toad season is here in South Florida 🐸\n\nAlso known as cane toads, these toxic toads can be dangerous to dogs, cats, and even humans if handled with bare hands.\n\nIf your pet licks, bites, or picks one up, symptoms can happen quickly and may become life-threatening without immediate treatment.\n\nSwipe through to learn:\n• why bufo toads are dangerous\n• symptoms to watch for\n• what to do immediately if your pet is exposed\n\nIf you believe your pet came in contact with a bufo toad, contact a veterinarian or emergency clinic right away.", slides:["images/work/bufo-1.webp","images/work/bufo-2.webp","images/work/bufo-3.webp","images/work/bufo-4.webp"] },
      { type:"reel", inline:true, brand:"animalhealthcare", avatar:"A", caption:"Who let the dogs out?\nChip said don’t worry about it 🎶🐕", poster:"images/work/ahcc-chip-reel-poster.webp", video:"images/work/ahcc-chip-reel.mp4" },
      { type:"post", brand:"animalhealthcare", avatar:"A", caption:"That reminder you actually don’t want to swipe away 🐾📲\n\nRoutine checkups help us stay ahead of changes in your pet’s health and keep them feeling their best. Schedule their next appointment with Animal Healthcare Center today!\n\n#AnimalHealthcareCenter #PetWellness #VeterinaryCare #HealthyPets", image:"images/work/ahcc-reminder.webp?v=2" },
      { type:"post", brand:"animalhealthcare", avatar:"A", caption:"Your pet called… they want you to book that appointment. 🐾😉\nBook your appointment online in minutes, anytime, anywhere. No calls, no hassle, just quick, easy scheduling when it works for you.\n\nSpots fill fast, so lock in your pet’s next visit today. 💙\n\n💻 animalhealthcare.com", image:"images/work/ahcc-booking.webp" },
      { type:"post", brand:"animalhealthcare", avatar:"A", caption:"Blaze is already stealing hearts 🐾❤️\n\nThis sweet face is new to the Animal HealthCare Center family, and we are so excited to watch him grow, play, and keep everyone smiling along the way.\n\nWelcome, Blaze! 💙🐾\n\nGot a new furry family member? We’d love to meet them too 🐶🐱 Send us a photo to be featured next!", image:"images/work/ahcc-blaze.webp" },
      { type:"post", brand:"animalhealthcare", avatar:"A", caption:"A tiny chip can make a huge difference. 🐾\n\nFor Check the Chip Day, take a minute to confirm your pet is microchipped and that your contact information is current. It’s one of the simplest ways to help them find their way back home if they ever get lost.\n\nCall us today to schedule a microchip appointment or have your pet’s chip checked! 💙", image:"images/work/ahcc-chip.webp" },
      { type:"post", brand:"animalhealthcare", avatar:"A", caption:"Today’s forecast: 100% chance of tail wags, belly rubs, and someone stealing your spot on the couch. 🐶💙\n\nHappy National Dog Day to the loyal sidekicks who make every day better! Give your pup an extra treat today and share their cutest photo with us below. 🐾", image:"images/work/ahcc-dogday.webp?v=2" },
      { type:"post", brand:"animalhealthcare", avatar:"A", caption:"Roses are red,\nViolets are blue,\nKeeping pets healthy\nIs what we love to do ❤️🐶\n\nHappy Valentine’s Day from the AHCC family!", image:"images/work/ahcc-bemine.webp?v=3" },
      { type:"post", brand:"animalhealthcare", avatar:"A", caption:"Say cheese! 🦷🐾 Fresh breath starts with a healthy smile. Regular dental cleanings help keep your pet’s teeth and gums in good shape—and make those kisses a little sweeter.\n\nSchedule your pet’s dental cleaning with Animal Healthcare Center today! 🐶✨\n\n#FreshBreathDay #PetDentalCare #HealthyPets #AnimalHealthCareCenter", image:"images/work/ahcc-freshbreath.webp" },
      { type:"post", brand:"animalhealthcare", avatar:"A", caption:"✨✏️ Happy Testimonial Tuesday!✏️✨\nNothing makes us happier than knowing our clients feel cared for and their pets are in good hands. 🐾 Your kind words remind us why we love what we do! Thank you for trusting us and letting us celebrate these special moments with your furry family!", image:"images/work/ahcc-testimonial.webp" }
    ] },
  { id:"realestate", cover:"images/work/realestate-cover.webp", title:"Real Estate & Home Building", subtitle:"Realtors and luxury home builders",
    categories:["Social Media & Content","Video & Multimedia"], agency:true,
    role:"Created social media posts and brand-specific copy for real estate professionals and a luxury home builder, adapting content to each brand's audience and personality. Worked with existing photos and videos and collaborated with editors to develop polished, engaging social content.",
    platforms:["Instagram","Facebook"], images:[], link:"",
    posts:[
      { type:"reel", brand:"kassandra.mcdowell_", avatar:"KM", caption:"Your trust is the whole job, and I never forget that.\n\nReady to make your next move? Let’s talk. 🤍", poster:"images/work/kassandra-poster.webp", video:"images/work/kassandra.mp4" },
      { type:"reel", brand:"oceanside.builders", avatar:"OB", caption:"Pov: your bank account just found out about your custom home plans😮‍💨\n\nRelax, we’ve got a plan. A real one, built around your budget before a single wall comes down.\n\nSo go ahead and dream big. We’ll handle the numbers🔨", poster:"images/work/oceanside-poster.webp", video:"images/work/oceanside.mp4" },
      { type:"carousel", brand:"codeyandkayla", avatar:"CK", caption:"Anyone can put a home online. Getting it sold for what it’s actually worth is the part that takes work.\n\nThinking about selling in Jupiter, Tequesta, or North Palm Beach? Send us a DM and we’ll walk you through how we’d market yours.", slides:["images/work/ck-1.webp","images/work/ck-2.webp","images/work/ck-3.webp","images/work/ck-4.webp","images/work/ck-5.webp","images/work/ck-6.webp","images/work/ck-7.webp"] },
      { type:"carousel", brand:"oceanside.builders", avatar:"OB", caption:"A finished home is the part everyone sees.\n\nWhat they don’t see is everything it took to get there:\nTrades, materials, inspections, schedules, and plenty of problem solving along the way.\n\nNot everything goes perfectly. That’s part of building. What matters is who takes responsibility when something comes up, communicates it, and keeps the project moving forward.\n\nThat’s what you’re really hiring a builder for.", slides:["images/work/ob-1.webp","images/work/ob-2.webp","images/work/ob-3.webp","images/work/ob-4.webp"] }
    ] },
  { id:"sports", cover:"images/work/sports-cover.webp", title:"Sports", subtitle:"Social media, photography, and creative storytelling across basketball and hockey.",
    categories:["Social Media & Content","Video & Multimedia"], agency:false,
    platforms:["Instagram","TikTok"], images:[], link:"",
    sections:[
      { title:"Florida Panthers", label:"Personal work", agency:false,
        role:"Original game-day TikToks and hockey storytelling that I create for my sports TikTok account.",
        posts:[
          { type:"reel", inline:true, brand:"girlzinhockey13", avatar:"G", caption:"Dear Santa, I have my Christmas list🏒❤️💚\n\n#floridapanthers #christmasshopping #fypシ #hockey #christmaslist @Florida Panthers", poster:"images/work/panthers-christmas-poster.webp", video:"images/work/panthers-christmas.mp4" },
          /* Add your Panthers work here, e.g.
             { type:"photo", image:"images/work/panthers-1.webp", alt:"...", caption:"..." },
             { type:"reel", brand:"sociallyalexys", avatar:"AD", caption:"...", video:"images/work/panthers-1.mp4", poster:"images/work/panthers-1.webp" } */
        ] },
      { title:"Perseverance Basketball", label:"Client work", agency:true,
        role:"Created social media content and promotional copy for youth basketball programs, highlighting player development, training opportunities, and registration campaigns.",
        posts:[
      { type:"carousel", brand:"perseverance_basketball", avatar:"PB", caption:"Coaching, competing and getting better every time out. Our players are putting in the work where it counts — on the court. 🏀\n\nRegister today!", slides:["images/work/pbb-1.webp","images/work/pbb-2.webp","images/work/pbb-3.webp"] },
      { type:"post", brand:"perseverance_basketball", avatar:"PB", caption:"Nothing but hustle and love for the game. ❤️🏀\n\nRegister today!", image:"images/work/pbb-4.webp" }
        ] }
    ] },
  { id:"academic", title:"University of Florida Projects", subtitle:"Campaign planning and brand strategy for Animal HealthCare Center",
    categories:["Academic Work"], agency:false, cover:"images/work/uf-cover.webp",
    platforms:["Instagram","Facebook"], images:[], link:"",
    sections:[
      { title:"Sit, Stay, Be Healthy", label:"Social Media Capstone · Fall 2025", agency:false,
        roleLabel:"The project", role:"A 26-page proposal for a three-month social media campaign for Animal HealthCare Center, a veterinary clinic in Wellington, Florida. I researched, planned, and wrote it for my University of Florida capstone.",
        highlights:["Situational analysis","SWOT analysis","Audience personas","Competitor research","Goals and measurable objectives","Strategies and tactics","Example content","Proposed campaign timeline","Budget","Evaluation methods"],
        link:"files/Sit-Stay-Be-Healthy-Campaign.pdf", linkLabel:"Read the full proposal (PDF)",
        posts:[ { type:"doc", caption:"Selected pages from the 26-page campaign proposal", slides:["images/work/cap-1.webp","images/work/cap-2.webp","images/work/cap-3.webp","images/work/cap-4.webp","images/work/cap-5.webp","images/work/cap-6.webp","images/work/cap-7.webp","images/work/cap-8.webp","images/work/cap-9.webp","images/work/cap-10.webp"] } ] },
      { title:"Brand Strategy & Style Guide", label:"Brand Strategy Project", agency:false,
        roleLabel:"The project", role:"A 25-page brand strategy and social media style guide for Animal HealthCare Center. I created it for a University of Florida course, and the clinic now uses it to guide its social media.",
        highlights:["Brand vision architecture","Target audience","Communication strategy","Brand voice matrix","Brand archetype","Content themes","Visual guidelines","Copy and formatting rules","Engagement guidelines"],
        link:"files/AHCC-Brand-Strategy-Style-Guide.pdf", linkLabel:"Read the full style guide (PDF)",
        posts:[ { type:"doc", wide:true, caption:"Selected pages from the 25-page brand strategy and style guide", slides:["images/work/bsg-1.webp","images/work/bsg-2.webp","images/work/bsg-3.webp","images/work/bsg-4.webp","images/work/bsg-5.webp","images/work/bsg-6.webp","images/work/bsg-7.webp","images/work/bsg-8.webp","images/work/bsg-9.webp","images/work/bsg-10.webp"] } ] }
    ] },
  { id:"ai", cover:"images/work/ai-cover.webp", title:"AI-Powered Marketing Workflows", subtitle:"Smarter workflows, more room for creativity",
    categories:["AI & Marketing Workflows"], agency:true,
    platforms:["Claude","Google Drive","Scheduling tools"], images:[], link:"",
    posts:[ { type:"pillars",
      items:[
        { icon:"folder", title:"The challenge", text:"Managing content across multiple brands involved repetitive tasks, including checking for new assets, reviewing products, and preparing content for scheduling." },
        { icon:"bulb", title:"My approach", text:"I independently designed, configured, and tested Claude-powered workflows to support content monitoring, product discovery, styling recommendations, and social media scheduling." },
        { icon:"build", title:"My role", text:"I identified workflow opportunities, developed the instructions and processes, tested their behavior, and refined them around the team's needs." },
        { icon:"heart", title:"The purpose", text:"Reduce repetitive administrative work while keeping creative direction, brand voice, and publishing decisions under human oversight." }
      ] } ] }
];
