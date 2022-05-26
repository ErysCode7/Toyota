import * as hamburger from "./hamburger.js";
import * as vehicle from "./vehicle.js";





window.addEventListener("resize", () => {
    if(window.innerWidth > 991) {
        const hamburgerIcon = document.querySelector(".header__hamburger");
        const headerNav = document.querySelector("#header__nav");
        const megaMenu = document.querySelector("#header__vehicles");
        const gridCarItems = document.querySelector("#megamenu__grid-car-items");
        const megamenuVehicle = document.querySelectorAll(".megamenu__vehicle");
        const cars = document.querySelector(".megamenu__cars");
        const headerSignUp = document.querySelector("#header__signup");
        const headerLogin = document.querySelector("#header__login");

        const exploreUpArrow = document.querySelector("#explore-svg-angle-up");
        const signupUpArrow = document.querySelector("#signup-svg-angle-up");
        const loginUpArrow = document.querySelector("#login-svg-angle-up");

        const exploreDownArrow = document.querySelector("#explore-svg-angle-down");
        const signupDownArrow = document.querySelector("#signup-svg-angle-down");
        const loginDownArrow = document.querySelector("#login-svg-angle-down");

           
        hamburgerIcon.classList.remove("active");
        megaMenu.classList.remove("show");
        headerNav.classList.remove("show");
        gridCarItems.classList.remove("show");
        headerSignUp.classList.remove("show");
        headerLogin.classList.remove("show");

        signupUpArrow.classList.remove("active");
        signupDownArrow.classList.add("active");
        
      

        megamenuVehicle.forEach(mega => {
            mega.classList.remove("active");
        });   
        cars.classList.add("active");
    }

    if(window.innerWidth < 990) {
        const megaMenu = document.querySelector("#header__vehicles");
        const headerSignUp = document.querySelector("#header__signup");
        const headerLogin = document.querySelector("#header__login");
        const exploreUpArrow = document.querySelector("#explore-svg-angle-up");
        const signupUpArrow = document.querySelector("#signup-svg-angle-up");
        const signupDownArrow = document.querySelector("#signup-svg-angle-down");
        const loginUpArrow = document.querySelector("#login-svg-angle-up");
        

        megaMenu.classList.remove("show-desktop");
        
        loginUpArrow.classList.remove("active");

        if(headerSignUp.classList.contains("show-desktop")) {
            headerSignUp.classList.remove("show-desktop");
        }  
     
        if(headerLogin.classList.contains("show-desktop")) {
            headerLogin.classList.remove("show-desktop");
        }  

        
      
        
    }
});

