const body=document.body, themeToggle=document.getElementById("themeToggle");
const saved=localStorage.getItem("quilsbee-theme");
if(saved==="dark"){body.classList.add("dark");themeToggle.textContent="☀"}
themeToggle.addEventListener("click",()=>{body.classList.toggle("dark");const dark=body.classList.contains("dark");themeToggle.textContent=dark?"☀":"☾";localStorage.setItem("quilsbee-theme",dark?"dark":"light")});

const modal=document.getElementById("comicModal"), openBtn=document.getElementById("comicOpen"), closeBtn=document.getElementById("closeComic");
const img=document.getElementById("comicImage"), label=document.getElementById("pageLabel");
const total=11; let page=1; let timer=null;
function render(){const n=String(page).padStart(2,"0");img.src=`assets/comic/page-${n}.png`;label.textContent=`Page ${page} / ${total}`}
function openReader(){page=1;render();modal.classList.add("open");modal.setAttribute("aria-hidden","false")}
function closeReader(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");stopAuto()}
function next(){if(page<total){page++;render()}}
function prev(){if(page>1){page--;render()}}
function stopAuto(){if(timer){clearInterval(timer);timer=null}document.getElementById("auto").textContent="▶ Auto"}
openBtn.addEventListener("click",openReader); closeBtn.addEventListener("click",closeReader);
document.getElementById("next").addEventListener("click",next);document.getElementById("prev").addEventListener("click",prev);
document.getElementById("first").addEventListener("click",()=>{page=1;render()});
document.getElementById("last").addEventListener("click",()=>{page=total;render()});
document.getElementById("auto").addEventListener("click",()=>{if(timer){stopAuto()}else{document.getElementById("auto").textContent="Ⅱ Pause";timer=setInterval(()=>{if(page>=total){stopAuto()}else next()},4500)}});
modal.addEventListener("click",e=>{if(e.target===modal)closeReader()});
document.addEventListener("keydown",e=>{if(!modal.classList.contains("open"))return;if(e.key==="Escape")closeReader();if(e.key==="ArrowRight")next();if(e.key==="ArrowLeft")prev()});
