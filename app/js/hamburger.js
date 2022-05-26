import { headerLogin, headerSignUp } from "./signup-login.js";
import { megaMenu } from "./vehicle.js";


//HAMBURGER MENU
export const hamburgerIcon = document.querySelector(".header__hamburger");
//HEADER NAVIGATION 
export const headerNav = document.querySelector("#header__nav");

//hamburger menu click show nav
hamburgerIcon.addEventListener("click", e => {
    hamburgerIcon.classList.toggle("active");
    hamburgerIcon.classList.toggle("not-active");
    headerNav.classList.toggle("show");
    if(!hamburgerIcon.classList.contains("active")) {
        megaMenu.classList.remove("show");  
        headerSignUp.classList.remove("show");
        headerLogin.classList.remove("show");
    };
});



window.addEventListener("resize", () => {
    if(window.innerWidth > 991) {
        hamburgerIcon.classList.add("not-active");
    }
})
