let menu=document.querySelector(".menu");
let closeMenu=document.querySelector(".close")
let nav=document.querySelector("nav")
let body=document.querySelector(".homepage::after")
menu.addEventListener("click",function (){
   nav.style.cssText="display:flex;"
   closeMenu.style.cssText="display:inline;"
   menu.style.cssText="display:none;"
   body.style.cssText="display:block"
})

closeMenu.addEventListener("click",function(){
   nav.style.cssText="display:none;"
   closeMenu.style.cssText="display:none;"
   menu.style.cssText="display:inline;"
})