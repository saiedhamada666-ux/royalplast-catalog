(function(){
'use strict';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const I={
whatsapp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4z"/><path d="M9 9.2c.4 2.2 2.6 4.5 5 5.3l1.3-1.3-1.9-1-.8.7c-.8-.4-1.6-1.2-2-2l.7-.8-1-1.9z" fill="currentColor"/></svg>',
facebook:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r=".6" fill="currentColor"/></svg>',
telegram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/></svg>',
tiktok:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12.5a4 4 0 1 0 4 4V3.5a5 5 0 0 0 5 4.5"/></svg>',
youtube:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5.5 3-5.5 3z" fill="currentColor"/></svg>',
website:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>',
email:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 7 9 6 9-6"/></svg>',
sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
go:'<svg class="go" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'};
const T={ar:{
nav_cat:'الكتالوج',nav_contact:'تواصل معنا',kicker:'Royal plast',welcome:'أهلاً بيك في',entity:'كيان رويال بلاست',
sub:'زجاجات وبرطمانات بلاستيك بكل المقاسات والأغطية والألوان. اتصفح التشكيلة كاملة وكلم فريق المبيعات على طول.',cta:'شوف الكتالوج',
cat_title:'كتالوج المنتجات',cat_sub:'اختار الفئة وفلتر بالحجم والنيك واللون ونوع الغطاء',reset:'مسح الفلاتر',search:'ابحث (مثال: NK24 أو 100 مل أو سبراي)',
f_size:'الحجم',f_neck:'النيك',f_color:'اللون',f_cap:'نوع الغطاء',all:'الكل',bottles:'زجاجات',jars:'برطمانات',
res:'منتج',imgs:'صور',ct_title:'تواصل مع فريق المبيعات',ct_sub:'اختار واحد من فريق المبيعات وهيرد عليك على واتساب',qr_t:'امسح الكود لفتح الكتالوج وروابطنا',
foot:'كتالوج رويال بلاست الإلكتروني',pick_t:'اختار مسؤول المبيعات',pick_s:'هيتفتح واتساب برسالة جاهزة فيها تفاصيل المنتج',
wa:'اطلب / استفسر على واتساب',wa_note:'هتختار واحد من فريق المبيعات في الخطوة الجاية',wa_gen:'تواصل على واتساب',
bottle:'زجاجة',jar:'برطمان',ml:'مل',gm:'جم',l:'لتر',kg:'كيلو',nk:'نيك',
r_cat:'الفئة',r_size:'الحجم',r_neck:'النيك',r_cap:'الغطاء',r_q:'الجودة',r_col:'الألوان المتاحة',r_code:'كود المنتج',r_img:'عدد الصور',r_x:'تفاصيل إضافية',
hq:'جودة عالية',matte:'ماط',k:'أسود',w:'أبيض',c:'شفاف',o:'ألوان أخرى',nospec:'اسأل المبيعات عن المقاس والتفاصيل',nospec_t:'منتج',
stat1:'تشكيلة منتجات',stat2:'صورة منتج',stat3:'حجم مختلف',stat4:'نوع غطاء',
msg:'السلام عليكم، عايز أستفسر عن المنتج ده من كتالوج رويال بلاست:',msg_gen:'السلام عليكم، عايز أستفسر عن منتجات رويال بلاست.',
m_prod:'المنتج',m_col:'الألوان',m_code:'الكود',m_link:'الرابط',empty:'مفيش منتجات بالفلاتر دي'},
en:{nav_cat:'Catalog',nav_contact:'Contact',kicker:'Royal plast',welcome:'Welcome to',entity:'the Royal Plast Entity',
sub:'Plastic bottles and jars in every size, cap and color. Browse the full range and talk to our sales team right away.',cta:'View the Catalog',
cat_title:'Product Catalog',cat_sub:'Pick a category and filter by size, neck, color and cap type',reset:'Clear filters',search:'Search name, neck or size',
f_size:'Size',f_neck:'Neck',f_color:'Color',f_cap:'Name',filters:'Filters',show:'Show',all:'All',bottles:'Bottles',jars:'Jars',
res:'products',imgs:'photos',ct_title:'Talk to our Sales Team',ct_sub:'Pick a sales rep and they will reply on WhatsApp',qr_t:'Scan to open the catalog & our links',
foot:'Royal plast online catalog',pick_t:'Choose a sales rep',pick_s:'WhatsApp opens with a ready message including the product details',
wa:'Order / Ask on WhatsApp',wa_note:'You will pick a sales rep in the next step',wa_gen:'Chat on WhatsApp',
bottle:'Bottle',jar:'Jar',ml:'ml',gm:'g',l:'L',kg:'kg',nk:'Neck',
r_cat:'Category',r_size:'Size',r_neck:'Neck',r_cap:'Cap',r_q:'Quality',r_col:'Available colors',r_code:'Product code',r_img:'Photos',r_x:'More details',
hq:'High quality',matte:'Matte',k:'Black',w:'White',c:'Clear',o:'Other colors',nospec:'Ask sales for size & details',nospec_t:'Product',
stat1:'Product ranges',stat2:'Product photos',stat3:'Different sizes',stat4:'Cap types',
msg:'Hello, I would like to ask about this product from the Royal plast catalog:',msg_gen:'Hello, I would like to ask about Royal plast products.',
m_prod:'Product',m_col:'Colors',m_code:'Code',m_link:'Link',empty:'No products match these filters'}};
let lang='en',theme=document.documentElement.dataset.theme||'light';
const t=k=>T[lang][k]||k;
let DATA=[],CFG={sales:[],social:{}};
const S={cat:'all',size:new Set,neck:new Set,color:new Set,cap:new Set,q:''};
const CO=['k','w','c','o'];
const sizeKey=s=>s.v+s.u;
function fmtSize(s){if(s.u=='ML')return s.v==1000?`1 ${t('l')}`:`${s.v} ${t('ml')}`;return s.v==1000?`1 ${t('kg')}`:`${s.v} ${t('gm')}`}
function sizesTxt(p){const a=p.sizes;if(!a.length)return '';const same=a.every(x=>x.u==a[0].u)&&a.every(x=>x.v!=1000);
 if(same)return a.map(x=>x.v).join(' / ')+' '+t(a[0].u=='ML'?'ml':'gm');return a.map(fmtSize).join(' / ')}
const capName=c=>lang=='ar'?c.ar:c.en;
function title(p){if(p.nospec)return `${t('nospec_t')} ${p.code}`;if(p.caps.length)return p.caps.map(capName).join(' / ');return [t(p.cat=='jar'?'jar':'bottle'),...p.extra.map(e=>e.en)].join(' · ')}
function fullTitle(p){return `${t(p.cat=='jar'?'jar':'bottle')} ${sizesTxt(p)}`.trim()}
function sub(p){if(p.nospec)return t('nospec');const a=[];if(p.necks.length)a.push(p.necks.map(n=>'NK'+n).join(' / '));p.caps.forEach(c=>a.push(capName(c)));p.extra.forEach(e=>a.push(lang=='ar'?e.ar:e.en));return a.join(' · ')}
const colTxt=p=>p.colors.map(c=>t(c)).join('، ').replace(/،/g,lang=='ar'?'، ':', ');
const dotsHTML=p=>`<span class="dots">${p.colors.map(c=>`<i class="dot d-${c}" title="${t(c)}"></i>`).join('')}</span>`;
const imgU=n=>`img/${n}.webp`,thU=n=>`t/${n}.webp`;
function reveal(root){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
 (root||document).querySelectorAll('.rv:not(.in)').forEach(el=>io.observe(el))}
function applyLang(){document.documentElement.lang=lang;document.documentElement.dir=lang=='ar'?'rtl':'ltr';
 $$('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));$$('[data-p]').forEach(e=>e.placeholder=t(e.dataset.p));
$('#yr').textContent=new Date().getFullYear();
 buildStats();buildFilters();renderGrid();socials();reps3();$('#fwa').innerHTML=I.whatsapp}
function applyTheme(){document.documentElement.dataset.theme=theme;$('#theme').innerHTML=theme=='dark'?I.sun:I.moon}
function save(k,v){try{localStorage.setItem(k,v)}catch(e){}}
$('#theme').onclick=()=>{theme=theme=='dark'?'light':'dark';save('rp_theme',theme);applyTheme()};
/* socials */
function socials(){const order=['whatsapp','facebook','facebook_sales','instagram','telegram','tiktok','youtube','website','email'];
 const h=order.filter(k=>k=='whatsapp'||CFG.social[k]).map(k=>{if(k=='whatsapp')return `<a class="si" data-k="whatsapp" href="#" data-wa title="WhatsApp">${I.whatsapp}</a>`;
  const u=CFG.social[k];const href=k=='email'&&!/^mailto:/.test(u)?'mailto:'+u:u;const fs=k=='facebook_sales';return `<a class="si" data-k="${fs?'facebook':k}" href="${href}" target="_blank" rel="noopener" title="${fs?(lang=='ar'?'صفحة المبيعات':'Sales page'):k}" style="position:relative">${I[fs?'facebook':k]}${fs?`<i class="bdg">${lang=='ar'?'مبيعات':'Sales'}</i>`:''}</a>`}).join('');
 $('#soc-hero').innerHTML=h;$('#soc-foot').innerHTML=h;bindWA()}
function bindWA(){$$('[data-wa]').forEach(a=>a.onclick=e=>{e.preventDefault();openReps(null)});$('#fwa').onclick=e=>{e.preventDefault();openReps(null)}}
function reps3(){$('#reps3').innerHTML=CFG.sales.map((r,i)=>`<a class="rep" href="#" data-i="${i}" style="--d:${i*.1}s"><span class="av">${(lang=='ar'?r.ar:r.en)[0]}</span><div><b>${lang=='ar'?r.ar:r.en}</b><span>+${r.phone.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})$/,'$1 $2 $3 $4')}</span></div>${I.go}</a>`).join('');
 $$('#reps3 .rep').forEach(a=>a.onclick=e=>{e.preventDefault();go(CFG.sales[a.dataset.i],null)});reveal()}
/* stats */
function buildStats(){const sz=new Set,cp=new Set;DATA.forEach(p=>{p.sizes.forEach(s=>sz.add(sizeKey(s)));p.caps.forEach(c=>cp.add(c.k))});
 const v=[[DATA.length,'stat1'],[DATA.reduce((a,p)=>a+p.imgs.length,0),'stat2'],[sz.size,'stat3'],[cp.size,'stat4']];
 $('#stg').innerHTML=v.map(([n,k],i)=>`<div class="st rv" style="--d:${i*.1}s"><b data-n="${n}">0</b><span>${t(k)}</span></div>`).join('');
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const b=e.target.querySelector('b'),n=+b.dataset.n;let c=0;const st=performance.now();(function f(now){const p=Math.min(1,(now-st)/1300);b.textContent=Math.round(n*(1-Math.pow(1-p,3)))+'+';if(p<1)requestAnimationFrame(f)})(st);io.unobserve(e.target)}}),{threshold:.5});
 $$('#stg .st').forEach(e=>io.observe(e));reveal()}
/* filters */
function pool(){return DATA.filter(p=>!p.hidden&&(S.cat=='all'||p.cat==S.cat))}
function buildFilters(){
 const cnt={all:DATA.filter(p=>!p.hidden).length,bottle:0,jar:0};DATA.forEach(p=>{if(!p.hidden)cnt[p.cat]++});
 $('#tabs').innerHTML=[['all','all',cnt.all],['bottle','bottles',cnt.bottle],['jar','jars',cnt.jar]].map(([k,l,n])=>`<button class="tab ${S.cat==k?'on':''}" data-c="${k}">${t(l)}<small>${n}</small></button>`).join('');
 $$('#tabs .tab').forEach(b=>b.onclick=()=>{S.cat=b.dataset.c;S.size.clear();S.neck.clear();S.color.clear();S.cap.clear();buildFilters();renderGrid()});
 const P=pool(),szs=new Map,nks=new Set,cps=new Map,cls=new Set;
 P.forEach(p=>{p.sizes.forEach(s=>szs.set(sizeKey(s),s));p.necks.forEach(n=>nks.add(n));p.caps.forEach(c=>cps.set(c.k,c));p.colors.forEach(c=>cls.add(c))});
 const row=(id,items,set,lab)=>{const sec=$(id),el=sec.querySelector('.chs');el.innerHTML='';items.forEach(([k,html])=>{const b=document.createElement('button');b.className='chip'+(set.has(k)?' on':'');b.innerHTML=html;b.style.setProperty('--i',el.children.length);b.onclick=()=>{set.has(k)?set.delete(k):set.add(k);b.classList.toggle('on');renderGrid()};el.appendChild(b)});sec.style.display=items.length?'':'none'};
 row('#f-size',[...szs.entries()].sort((a,b)=>(a[1].u==b[1].u?0:(a[1].u=='ML'?-1:1))||a[1].v-b[1].v).map(([k,s])=>[k,fmtSize(s)]),S.size);
 row('#f-neck',[...nks].sort((a,b)=>a-b).map(n=>[n,'NK'+n]),S.neck);
 row('#f-color',CO.filter(c=>cls.has(c)).map(c=>[c,`<i class="dot d-${c}"></i>${t(c)}`]),S.color);
 row('#f-cap',[...cps.values()].map(c=>[c.k,capName(c)]),S.cap)}
$('#q').oninput=e=>{S.q=e.target.value.trim().toLowerCase();renderGrid()};
$('#reset').onclick=()=>{S.size.clear();S.neck.clear();S.color.clear();S.cap.clear();buildFilters();renderGrid()};
$('#fopen').onclick=()=>show('#fd');
function match(p){if(p.hidden)return false;if(S.cat!='all'&&p.cat!=S.cat)return false;
 if(S.size.size&&!p.sizes.some(s=>S.size.has(sizeKey(s))))return false;
 if(S.neck.size&&!p.necks.some(n=>S.neck.has(String(n))||S.neck.has(n)))return false;
 if(S.color.size&&!p.colors.some(c=>S.color.has(c)))return false;
 if(S.cap.size&&!p.caps.some(c=>S.cap.has(c.k)))return false;
 if(S.q){const h=(title(p)+' '+sub(p)+' '+p.code+' '+p.necks.map(n=>'nk'+n+' '+n).join(' ')+' '+p.sizes.map(s=>s.v+s.u).join(' ')+' '+p.caps.map(c=>c.ar+' '+c.en).join(' ')).toLowerCase();
  if(!S.q.split(/\s+/).every(w=>h.includes(w)))return false}return true}
function activePills(){const P=[];const lab={size:k=>{const m=DATA.flatMap(p=>p.sizes).find(s=>sizeKey(s)==k);return m?fmtSize(m):k},neck:k=>'NK'+k,color:k=>t(k),cap:k=>{const c=DATA.flatMap(p=>p.caps).find(c=>c.k==k);return c?capName(c):k}};
 ['size','neck','color','cap'].forEach(f=>S[f].forEach(k=>P.push([f,k,lab[f](k)])));return P}
function renderGrid(){const L=DATA.filter(match);$('#cnt').textContent=`${L.length} ${t('res')}`;
 const P=activePills();const bd=$('#fbadge');bd.hidden=!P.length;bd.textContent=P.length;
 $('#act').innerHTML=P.map(([f,k,l])=>`<button class="pill" data-f="${f}" data-k="${k}">${l}<i>✕</i></button>`).join('');
 $$('#act .pill').forEach(b=>b.onclick=()=>{const set=S[b.dataset.f];[...set].forEach(x=>{if(String(x)==b.dataset.k)set.delete(x)});buildFilters();renderGrid()});
 $('#apply').textContent=`${t('show')} ${L.length} ${t('res')}`;
 const g=$('#grid');if(!L.length){g.innerHTML=`<div class="empty">${t('empty')}</div>`;return}
 g.innerHTML=L.map((p,i)=>`<div class="pcw rv" style="--d:${(i%4)*.08}s"><button class="pc" data-id="${p.id}"><div class="pim"><img loading="lazy" src="${thU(p.imgs[0])}" alt="${fullTitle(p)}">${p.hq||p.matte?`<div class="bd">${p.hq?`<span class="bg hq">★ ${t('hq')}</span>`:''}${p.matte?`<span class="bg">${t('matte')}</span>`:''}</div>`:''}${p.imgs.length>1?`<span class="stack">▣ ${p.imgs.length} ${t('imgs')}</span>`:''}<i class="sheen"></i></div>
 <div class="pb"><div class="pt">${title(p)}</div><div class="tags">${p.necks.map(n=>`<span class="tg n">NK${n}</span>`).join('')}${p.sizes.slice(0,3).map(s=>`<span class="tg s">${fmtSize(s)}</span>`).join('')}${p.sizes.length>3?`<span class="tg s">+${p.sizes.length-3}</span>`:''}${dotsHTML(p)}</div></div></button></div>`).join('');
 $$('#grid .pc').forEach(b=>{b.onclick=()=>openProd(+b.dataset.id);fx(b)});reveal(g)}
/* card fx: tilt + image cycling */
const FINE=matchMedia('(hover:hover) and (pointer:fine)').matches;
function fx(b){if(!FINE)return;const p=DATA.find(x=>x.id==b.dataset.id),img=b.querySelector('img');let iv=null,k=0;
 b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;b.classList.add('tilt');b.style.transform=`perspective(900px) rotateY(${x*9}deg) rotateX(${-y*9}deg) translateY(-8px)`;b.style.setProperty('--gx',(x+.5)*100+'%');b.style.setProperty('--gy',(y+.5)*100+'%')});
 b.addEventListener('pointerenter',()=>{if(p.imgs.length>1){iv=setInterval(()=>{k=(k+1)%p.imgs.length;img.src=thU(p.imgs[k])},1100)}});
 b.addEventListener('pointerleave',()=>{clearInterval(iv);k=0;img.src=thU(p.imgs[0]);b.classList.remove('tilt');b.style.transform=''})}
/* modal */
let cur=null,gi=0;
function show(id){const o=$(id);o.classList.add('show');requestAnimationFrame(()=>o.classList.add('vis'));document.body.style.overflow='hidden'}
function hide(o){o.classList.remove('vis');setTimeout(()=>{o.classList.remove('show');if(!$$('.ov.show').length)document.body.style.overflow=''},300)}
$$('.ov').forEach(o=>{o.addEventListener('click',e=>{if(e.target==o||e.target.closest('[data-close]'))hide(o)})});
document.addEventListener('keydown',e=>{if(e.key=='Escape')$$('.ov.show').forEach(hide);if($('#pm').classList.contains('show')){if(e.key=='ArrowRight')gstep(lang=='ar'?-1:1);if(e.key=='ArrowLeft')gstep(lang=='ar'?1:-1)}});
function gset(i){const p=cur;gi=(i+p.imgs.length)%p.imgs.length;$('#gimg').src=imgU(p.imgs[gi]);$$('#gth img').forEach((x,j)=>x.classList.toggle('on',j==gi))}
function gstep(d){if(cur)gset(gi+d)}
$('#gp').onclick=()=>gstep(-1);$('#gn').onclick=()=>gstep(1);
(function(){let x=null;const m=$('.gm');m.addEventListener('touchstart',e=>x=e.touches[0].clientX,{passive:true});m.addEventListener('touchend',e=>{if(x==null)return;const d=e.changedTouches[0].clientX-x;if(Math.abs(d)>40)gstep(d<0?1:-1);x=null})})();
function openProd(id){const p=DATA.find(x=>x.id==id);if(!p)return;cur=p;
 $('#mt').innerHTML=`${title(p)}<small>${fullTitle(p)}${p.necks.length?' · '+p.necks.map(n=>'NK'+n).join('/'):''}</small>`;
 $('#gth').innerHTML=p.imgs.map((n,j)=>`<img src="${thU(n)}" alt="" data-j="${j}">`).join('');$$('#gth img').forEach(i=>i.onclick=()=>gset(+i.dataset.j));
 $('.nv.p').style.display=$('.nv.nx').style.display=p.imgs.length>1?'':'none';
 const rows=[[t('r_cat'),t(p.cat=='jar'?'jars':'bottles')]];
 if(p.sizes.length)rows.push([t('r_size'),p.sizes.map(fmtSize).join(' / ')]);
 if(p.necks.length)rows.push([t('r_neck'),p.necks.map(n=>'NK'+n).join(' / ')]);
 if(p.caps.length)rows.push([t('r_cap'),p.caps.map(capName).join(' / ')]);
 if(p.hq)rows.push([t('r_q'),t('hq')]);if(p.matte)rows.push([t('r_q')+' ',t('matte')]);
 if(p.extra.length)rows.push([t('r_x'),p.extra.map(e=>lang=='ar'?e.ar:e.en).join(' / ')]);
 rows.push([t('r_col'),`${dotsHTML(p)} ${colTxt(p)}`]);rows.push([t('r_code'),p.code]);rows.push([t('r_img'),p.imgs.length]);
 if(p.nospec)rows.splice(1,rows.length-4);
 $('#mtab').innerHTML=rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('');
 $('#mwa').innerHTML=I.whatsapp+t('wa');$('#mwa').onclick=()=>openReps(p);
 gset(0);show('#pm');try{history.replaceState(null,'','#p='+p.id)}catch(e){}}
$('#pm').addEventListener('click',e=>{if(e.target==$('#pm')||e.target.closest('[data-close]'))try{history.replaceState(null,'',location.pathname)}catch(x){}});
/* reps */
function msg(p){if(!p)return t('msg_gen');const url=location.origin+location.pathname+'#p='+p.id;
 return `${t('msg')}\n\n• ${t('m_prod')}: ${title(p)}\n• ${t(p.cat=='jar'?'jar':'bottle')}${p.sizes.length?' · '+sizesTxt(p):''}${p.necks.length?' · '+p.necks.map(n=>'NK'+n).join('/'):''}\n• ${t('m_col')}: ${colTxt(p)}\n• ${t('m_code')}: ${p.code}\n• ${t('m_link')}: ${url}`}
function go(r,p){window.open(`https://wa.me/${r.phone}?text=${encodeURIComponent(msg(p))}`,'_blank','noopener')}
function openReps(p){const L=[...CFG.sales].sort(()=>Math.random()-.5);
 $('#replist').innerHTML=L.map((r,i)=>`<a class="rep" href="#" data-i="${i}"><span class="av">${(lang=='ar'?r.ar:r.en)[0]}</span><div><b>${lang=='ar'?r.ar:r.en}</b><span>+${r.phone.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})$/,'$1 $2 $3 $4')}</span></div>${I.go}</a>`).join('');
 $$('#replist .rep').forEach(a=>a.onclick=e=>{e.preventDefault();go(L[a.dataset.i],p);hide($('#rm'))});show('#rm')}
/* scroll fx */
const nav=$('#nav'),prog=$('#prog'),topb=$('#topb');
addEventListener('scroll',()=>{const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;nav.classList.toggle('sc',y>30);prog.style.transform=`scaleX(${h>0?y/h:0})`;topb.classList.toggle('on',y>700);
 const hi=$('.hero-in');if(y<innerHeight){hi.style.transform=`translateY(${y*.18}px)`;hi.style.opacity=Math.max(0,1-y/(innerHeight*.9))}$$('.fl').forEach((f,i)=>f.style.marginTop=(y*(.06+i*.015))+'px')},{passive:true});
topb.onclick=()=>scrollTo({top:0,behavior:'smooth'});
/* floaters */
function floaters(){const pick=[...new Set([1,60,130,200,150,90])].map(i=>DATA[Math.min(DATA.length-1,i)]).filter(Boolean);
 const pos=[['6%','16%',-9],['80%','12%',8],['3%','62%',7],['84%','60%',-7],['22%','78%',-5],['68%','78%',6]];
 $('#floaters').innerHTML=pick.map((p,i)=>`<div class="fl" style="inset-inline-start:${pos[i][0]};top:${pos[i][1]};--r:${pos[i][2]}deg;animation-delay:${-i*1.3}s;${i>3?'':''}"><img src="${thU(p.imgs[0])}" alt=""></div>`).join('')}
function bubbles(){$('#bubs').innerHTML=Array.from({length:14},(_,i)=>`<i style="left:${Math.random()*100}%;--s:${8+Math.random()*26}px;--t:${9+Math.random()*10}s;--dl:${-Math.random()*14}s;--c:${i%3?'var(--cyan)':'var(--red)'}"></i>`).join('')}
function marquee(){if(!$('#mq'))return;const names=new Set;DATA.forEach(p=>p.caps.forEach(c=>names.add(c.en)));const L=[...names];const h=L.map(n=>`<span>${n}</span>`).join('<em>✦</em>');$('#mq').innerHTML=h+'<em>✦</em>'+h+'<em>✦</em>'}
addEventListener('pointermove',e=>{if(!FINE)return;const hr=$('#hero');if(scrollY>innerHeight)return;hr.style.setProperty('--mx',(e.clientX/innerWidth-.5).toFixed(3));hr.style.setProperty('--my',(e.clientY/innerHeight-.5).toFixed(3))},{passive:true});
/* init */
function qr(){try{const q=qrcode(0,'M');q.addData(location.origin+location.pathname+'#contact');q.make();$('#qr').innerHTML=q.createSvgTag({cellSize:6,margin:0,scalable:true})}catch(e){}}
Promise.all([fetch('products.json?v='+Date.now()).then(r=>r.json()),fetch('config.json?v='+Date.now()).then(r=>r.json())]).then(([d,c])=>{
 DATA=d.products;CFG=c;applyTheme();applyLang();floaters();bubbles();marquee();qr();reveal();
 const m=location.hash.match(/#p=(\d+)/);if(m){setTimeout(()=>{$('#catalog').scrollIntoView();openProd(+m[1])},300)}});
})();
