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

    const backExploreVehicle = document.querySelector(".back-to-explore-vehicle");

    backExploreVehicle.addEventListener("click", () => {
        if(megaMenu.classList.contains("show")) {
            megaMenu.classList.remove("show");
        } else {
            megaMenu.classList.add("show");
        }
    });

    const carsSVG = document.querySelector(".cars-svg");
    const gridCarItems = document.querySelector("#megamenu__grid-car-items");

    carsSVG.addEventListener("click", (e) => {
        gridCarItems.classList.toggle("show");
        if(!hamburgerIcon.classList.contains("active")) {
            megaMenu.classList.remove("show");  
        };
    });

    const backToVehicleMenu = document.querySelector(".back-to-vehicle-menu");

    backToVehicleMenu.addEventListener("click", (e) => {
        gridCarItems.classList.remove("show");
    });
});

