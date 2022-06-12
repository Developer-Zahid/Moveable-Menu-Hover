const cursor = document.getElementById("cursor");
const cursorHover = document.querySelectorAll(".cursor-hover");
const navbarLink = document.querySelectorAll(".navbar__link");
window.addEventListener("mousemove",(e)=>{
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
})
cursorHover.forEach(cursorHover =>{
    cursorHover.addEventListener("mouseenter",()=>{
        cursor.style.transform = "translate(-50%,-50%) scale(5)";
        cursor.style.mixBlendMode = "difference";
        cursor.style.background = "var(--cursor-color-hover)";
    })
    cursorHover.addEventListener("mouseleave",()=>{
        cursor.style.transform = "translate(-50%,-50%) scale(1)";
        cursor.style.mixBlendMode = "normal";
        cursor.style.background = "var(--cursor-color)";
    })
})
navbarLink.forEach(links =>{
    links.addEventListener("mousemove",(e)=>{
        links.style.transform = `translateX(${(((window.innerWidth / 2) - e.pageX) / 22) * -1}%) translateY(${((window.innerHeight / 2) - e.pageY) / 1.5}%)`;
    })
    links.addEventListener("mouseleave",()=>{
        links.style.transform = "translateX(0) translateY(0)";
    })
})