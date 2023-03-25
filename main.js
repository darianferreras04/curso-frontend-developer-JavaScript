const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const CarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")


menuEmail.addEventListener("click", toggleDesktopMenu);

menuBurger.addEventListener("click", toggleMobileMenu);

CarritoIcon.addEventListener("click", toggleCarritoIcon )

function toggleDesktopMenu(){

const isAsideClosed = aside.classList.contains("inactive");

if (!isAsideClosed){
    aside.classList.add("inactive");
}

    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed){
        aside.classList.add("inactive");
    }
    
    mobileMenu.classList.toggle("inactive")
    }
 
function toggleCarritoIcon(){
    
    const isMobileMenuClosed = mobileMenu.classList.contains ("inactive");

    if (!isMobileMenuClosed){
        mobileMenu.classList.add("inactive")
    }
    
    aside.classList.toggle("inactive")
}

