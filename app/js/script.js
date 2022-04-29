window.addEventListener("DOMContentLoaded", () => {

    //HAMBURGER MENU
    const hamburgerIcon = document.querySelector(".header__hamburger");
    //HEADER NAVIGATION 
    const headerNav = document.querySelector("#header__nav");

    //hamburger menu click show nav
    hamburgerIcon.addEventListener("click", e => {
        hamburgerIcon.classList.toggle("active");
        hamburgerIcon.classList.toggle("not-active");
        headerNav.classList.toggle("show");
        if(!hamburgerIcon.classList.contains("active")) {
            megaMenu.classList.remove("show");  
        };
    });

    //after opening hamburger menu explore vehicle tab
    const exploreVehicleSVG = document.querySelector(".explore-vehicle-svg");
    const megaMenu = document.querySelector("#header__vehicles");

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


    //back to explore vehicle menu
    const backExploreVehicle = document.querySelector(".back-to-explore-vehicle");

    backExploreVehicle.addEventListener("click", () => {
        megaMenu.classList.toggle("show");
    });
     

    const vehiclesSVG = document.querySelectorAll(".vehicles-svg");
    const megamenuVehicle = document.querySelectorAll(".megamenu__vehicle");
    const gridCarItems = document.querySelector("#megamenu__grid-car-items");

    vehiclesSVG.forEach((vecSVG, index) => {
        vecSVG.addEventListener("click", (e) => {
            megamenuVehicle.forEach(mega => mega.classList.remove("active"));
            megamenuVehicle[index].classList.add("active");
            gridCarItems.classList.add("show");
        });
    });
   
    const backToVehicleMenu = document.querySelectorAll(".back-to-vehicle-menu");

    backToVehicleMenu.forEach(back => {
        back.addEventListener("click", () => {
            gridCarItems.classList.remove("show");
        });
    });

    const angleArrow = document.querySelectorAll(".fa-angle-arrow");

    
});
