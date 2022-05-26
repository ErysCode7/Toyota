import { headerSignUp, signupUpArrow, signupDownArrow, headerLogin, loginUpArrow, loginDownArrow } from "./signup-login.js";



//after opening hamburger menu explore vehicle tab
const exploreVehicleSVG = document.querySelector(".explore-vehicle-svg");
export const megaMenu = document.querySelector("#header__vehicles");
const megamenuCarsTab = document.querySelector("#megamenu__cars-tab");

//back to explore vehicle menu
const backExploreVehicle = document.querySelector(".back-to-explore-vehicle");

// EXPLORE VEHICLES CAROUSEL LI TAGS
export const exploreUpArrow = document.querySelector("#explore-svg-angle-up");
export const exploreDownArrow = document.querySelector("#explore-svg-angle-down");
const exploreVehicleLI = document.querySelector("#header__explore-vehicle-li");

const vehiclesSVG = document.querySelectorAll(".vehicles-svg");
const ca = document.querySelectorAll(".ca");
const megamenuVehicle = document.querySelectorAll(".megamenu__vehicle");
const gridCarItems = document.querySelector("#megamenu__grid-car-items");
const activeBtn = document.querySelectorAll("#megamenu__cars-tab li button")
const carouselIndicator = document.querySelectorAll(".carousel-indicator");

const backToVehicleMenu = document.querySelectorAll(".back-to-vehicle-menu");


//explore vehicle show vehicle options/tabs
exploreVehicleSVG.addEventListener("click", () => {
    if(megaMenu.classList.contains("show")) {
        megaMenu.classList.remove("show");
    } else {
        megaMenu.classList.add("show");
    }
    if(megaMenu.classList.contains("show")) {
        gridCarItems.classList.remove("show");
    }; 
});




backExploreVehicle.addEventListener("click", (e) => {
        e.stopPropagation();
        megaMenu.classList.toggle("show");
});



ca.forEach((vecSVG, index) => {
    vecSVG.addEventListener("click", (e) => {
        e.stopPropagation();

        ca.forEach(vecSVG => vecSVG.classList.remove("active"));
        vecSVG.classList.add("active");

        activeBtn.forEach(btn => btn.classList.remove("active"));
        activeBtn[index].classList.add("active");

        carouselIndicator.forEach(btn => btn.classList.remove("active"));
        carouselIndicator[index].classList.add("active");
        
        megamenuVehicle.forEach(mega => mega.classList.remove("active"));
        megamenuVehicle[index].classList.add("active");
        gridCarItems.classList.add("show");
    
    });
    carouselIndicator[index].addEventListener("click", (e) => {
        e.stopPropagation();

        ca.forEach(vecSVG => vecSVG.classList.remove("active"));
        vecSVG.classList.add("active");

        activeBtn.forEach(btn => btn.classList.remove("active"));
        activeBtn[index].classList.add("active");

        carouselIndicator.forEach(btn => btn.classList.remove("active"));
        carouselIndicator[index].classList.add("active");
        
        megamenuVehicle.forEach(mega => mega.classList.remove("active"));
        megamenuVehicle[index].classList.add("active");
        gridCarItems.classList.add("show");
    })
});





backToVehicleMenu.forEach(back => {
    
    back.addEventListener("click", () => {
        gridCarItems.classList.remove("show");
    });
});





exploreVehicleLI.addEventListener("click", (e) => {
    exploreUpArrow.classList.add("active");
    exploreDownArrow.classList.remove("active");
    headerSignUp.classList.remove("show-desktop");
    signupUpArrow.classList.remove("active");
    signupDownArrow.classList.add("active");
    headerLogin.classList.remove("show-desktop");
    loginUpArrow.classList.remove("active");
    loginDownArrow.classList.add("active");
    if(megaMenu.classList.contains("show-desktop")) {
        megaMenu.classList.remove("show-desktop");
        exploreUpArrow.classList.remove("active");
        exploreDownArrow.classList.add("active");
    } else {
        megaMenu.classList.add("show-desktop");
    }
});

