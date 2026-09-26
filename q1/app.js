const root=document.documentElement;
const themeToggle=document.getElementById("themeToggle");
const saved=localStorage.getItem("quilsbee-theme");
if(saved){root.dataset.theme=saved;themeToggle.textContent=saved==="dark"?"☀":"☾";}
themeToggle.addEventListener("click",()=>{
  const next=root.dataset.theme==="dark"?"light":"dark";
  root.dataset.theme=next; localStorage.setItem("quilsbee-theme",next);
  themeToggle.textContent=next==="dark"?"☀":"☾";
});
let page=1, playing=false, timer=null;
const img=document.getElementById("comicPage"), no=document.getElementById("pageNo"), prog=document.getElementById("progress");
function showPage(n){
 page=Math.max(1,Math.min(11,n));
 const s=String(page).padStart(2,"0");
 img.src=`assets/comic/page-${s}.webp`;
 img.alt=`Quantum Academy manga Chapter 01 page ${page}`;
 no.textContent=s;
 prog.style.width=`${(page/11)*100}%`;
 document.getElementById("prev").disabled=page===1;
 document.getElementById("next").disabled=page===11;
 window.scrollTo({top:document.getElementById("comic").offsetTop-80,behavior:"smooth"});
}
document.getElementById("prev").onclick=()=>showPage(page-1);
document.getElementById("next").onclick=()=>showPage(page+1);
document.addEventListener("keydown",e=>{
 if(e.key==="ArrowRight")showPage(page+1);
 if(e.key==="ArrowLeft")showPage(page-1);
});
document.getElementById("play").onclick=()=>{
 playing=!playing;
 const btn=document.getElementById("play");
 btn.textContent=playing?"⏸ Pause":"▶ Auto Play";
 if(playing){
   timer=setInterval(()=>{
     if(page>=11){playing=false;btn.textContent="▶ Auto Play";clearInterval(timer);return}
     showPage(page+1);
   },4500);
 } else clearInterval(timer);
};
document.getElementById("fullscreen").onclick=()=>{
 const el=document.querySelector(".comic-reader");
 if(!document.fullscreenElement) el.requestFullscreen?.(); else document.exitFullscreen?.();
};
showPage(1);
