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
            headerSignUp.classList.remove("show");
            headerLogin.classList.remove("show");
        };
    });

    //after opening hamburger menu explore vehicle tab
    const exploreVehicleSVG = document.querySelector(".explore-vehicle-svg");
    const megaMenu = document.querySelector("#header__vehicles");
    const megamenuCarsTab = document.querySelector("#megamenu__cars-tab");

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

    backExploreVehicle.addEventListener("click", (e) => {
            e.stopPropagation();
            megaMenu.classList.toggle("show");
    });

    // backExploreVehicle.addEventListener("click", (e) => {
    //     e.stopPropagation();
    //     megaMenu.classList.toggle("show");
    // });
     

    const vehiclesSVG = document.querySelectorAll(".vehicles-svg");
    const ca = document.querySelectorAll(".ca");
    const megamenuVehicle = document.querySelectorAll(".megamenu__vehicle");
    const gridCarItems = document.querySelector("#megamenu__grid-car-items");
    const activeBtn = document.querySelectorAll("#megamenu__cars-tab li button")
    const carouselIndicator = document.querySelectorAll(".carousel-indicator");

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

  
   
    const backToVehicleMenu = document.querySelectorAll(".back-to-vehicle-menu");

    backToVehicleMenu.forEach(back => {
        
        back.addEventListener("click", () => {
            gridCarItems.classList.remove("show");
        });
    });

    const signupSVG = document.querySelector(".signup-svg");
    const headerSignUp = document.querySelector("#header__signup");
    const backToSignup = document.querySelector(".back-to-signup");

    const loginSVG  = document.querySelector(".login-svg");
    const headerLogin = document.querySelector("#header__login");
    const backToLogin = document.querySelector(".back-to-login");


    backToSignup.addEventListener("click", (e) => {
        headerSignUp.classList.toggle("show");
    });

    signupSVG.addEventListener("click", () => {
       headerSignUp.classList.toggle("show"); 
    });

    loginSVG.addEventListener("click", () => {
        headerLogin.classList.toggle("show"); 
    });

    backToLogin.addEventListener("click", (e) => {
        headerLogin.classList.toggle("show");
    });



    const angleArrow = document.querySelectorAll(".fa-angle-arrow");

    const headerSignUpForm = document.querySelector("#header__signup-form");
    const signupBtn = document.querySelector("#signup__btn");

    headerSignUpForm.addEventListener("click", (e) => {
        e.preventDefault(); 
    });


    //DESKTOP EVENTS
    // EXPLORE VEHICLES CAROUSEL LI TAGS
    const exploreUpArrow = document.querySelector("#explore-svg-angle-up");
    const exploreDownArrow = document.querySelector("#explore-svg-angle-down");
    const exploreVehicleLI = document.querySelector("#header__explore-vehicle-li");

    //SIGN UP
    const signupUpArrow = document.querySelector("#signup-svg-angle-up");
    const signupDownArrow = document.querySelector("#signup-svg-angle-down");
    const signupBtnli = document.querySelector("#signup-btn-li");

    //LOGIN
    const loginUpArrow = document.querySelector("#login-svg-angle-up");
    const loginDownArrow = document.querySelector("#login-svg-angle-down");
    const loginBtnLi = document.querySelector("#login-btn-li");

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


    signupBtnli.addEventListener("click", (e) => {
        signupUpArrow.classList.add("active");
        signupDownArrow.classList.remove("active");
        megaMenu.classList.remove("show-desktop");
        exploreUpArrow.classList.remove("active");
        exploreDownArrow.classList.add("active");
        headerLogin.classList.remove("show-desktop");
        loginUpArrow.classList.remove("active");
        loginDownArrow.classList.add("active");

        if(headerSignUp.classList.contains("show-desktop")) {
            headerSignUp.classList.remove("show-desktop");
            signupUpArrow.classList.remove("active");
            signupDownArrow.classList.add("active");
        } else {
            headerSignUp.classList.add("show-desktop");
        }
    });

    loginBtnLi.addEventListener("click", (e) => {
        loginUpArrow.classList.add("active");
        loginDownArrow.classList.remove("active");
        megaMenu.classList.remove("show-desktop");
        exploreUpArrow.classList.remove("active");
        exploreDownArrow.classList.add("active");
        headerSignUp.classList.remove("show-desktop");
        signupUpArrow.classList.remove("active");
        signupDownArrow.classList.add("active");
   
        if(headerLogin.classList.contains("show-desktop")) {
            headerLogin.classList.remove("show-desktop");
            loginUpArrow.classList.remove("active");
            loginDownArrow.classList.add("active");
        } else {
            headerLogin.classList.add("show-desktop");
        }
    })
});


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

        
        
        

        // signupDownArrow.classList.add("active");
        // loginDownArrow.classList.add("active");
      

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
        const loginUpArrow = document.querySelector("#login-svg-angle-up");

        megaMenu.classList.remove("show-desktop");
        // exploreUpArrow.classList.remove("active");
        // signupUpArrow.classList.remove("active");
        loginUpArrow.classList.remove("active");

        if(headerSignUp.classList.contains("show-desktop")) {
            headerSignUp.classList.remove("show-desktop");
        }  
     
        if(headerLogin.classList.contains("show-desktop")) {
            headerLogin.classList.remove("show-desktop");
        }  
    }
});
