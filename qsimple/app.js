const root=document.documentElement, theme=document.getElementById('themeToggle');
const saved=localStorage.getItem('quilsbee-theme'); if(saved){root.dataset.theme=saved;theme.textContent=saved==='dark'?'☀':'☾';}
theme.onclick=()=>{const n=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=n;localStorage.setItem('quilsbee-theme',n);theme.textContent=n==='dark'?'☀':'☾'};
const modal=document.getElementById('comicModal'), img=document.getElementById('comicPage'), no=document.getElementById('pageNo');let page=1;
function show(n){page=Math.max(1,Math.min(11,n));const s=String(page).padStart(2,'0');img.src=`assets/comic/page-${s}.webp`;img.alt=`Quilsbee Chapter 01 page ${page}`;no.textContent=`${s} / 11`;document.getElementById('prev').disabled=page===1;document.getElementById('next').disabled=page===11}
document.getElementById('comicOpen').onclick=()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');show(1)};
document.getElementById('closeComic').onclick=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')};
document.getElementById('prev').onclick=()=>show(page-1);document.getElementById('next').onclick=()=>show(page+1);
document.addEventListener('keydown',e=>{if(!modal.classList.contains('open'))return;if(e.key==='Escape')document.getElementById('closeComic').click();if(e.key==='ArrowLeft')show(page-1);if(e.key==='ArrowRight')show(page+1)});
