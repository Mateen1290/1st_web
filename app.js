var openMenu = document.getElementsByClassName("openMenu")[0];
var crossMenu = document.getElementsByClassName("crossMenu")[0];
var mobileMenu = document.getElementsByClassName("mobileMenu")[0];

openMenu.addEventListener("click" , function(){
    mobileMenu.style.top = "0%";
})

crossMenu.addEventListener("click" , function(){
    mobileMenu.style.top = "-100%";
})