import { megaMenu, exploreUpArrow, exploreDownArrow } from "./vehicle.js";

const signupSVG = document.querySelector(".signup-svg");
export const headerSignUp = document.querySelector("#header__signup");
const backToSignup = document.querySelector(".back-to-signup");

const loginSVG  = document.querySelector(".login-svg");
export const headerLogin = document.querySelector("#header__login");
export const backToLogin = document.querySelector(".back-to-login");

//SIGN UP
export const signupUpArrow = document.querySelector("#signup-svg-angle-up");
export const signupDownArrow = document.querySelector("#signup-svg-angle-down");
const signupBtnli = document.querySelector("#signup-btn-li");

//LOGIN
export const loginUpArrow = document.querySelector("#login-svg-angle-up");
export const loginDownArrow = document.querySelector("#login-svg-angle-down");
const loginBtnLi = document.querySelector("#login-btn-li");
const loginClose = document.querySelector("[data-close-login]");
const signUpClose = document.querySelector("[data-close-signup]");




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


signupBtnli.addEventListener("click", (e) => {
    signupUpArrow.classList.add("active");
    signupDownArrow.classList.remove("active");
    megaMenu.classList.remove("show-desktop");
    exploreUpArrow.classList.remove("active");
    exploreDownArrow.classList.add("active");
    headerLogin.classList.remove("show-desktop");
    loginUpArrow.classList.remove("active");
    loginDownArrow.classList.add("active");


    headerSignUp.classList.add("show-desktop");

});

signUpClose.addEventListener("click", (e) => {
    e.stopPropagation();
    headerSignUp.classList.remove("show-desktop");
    signupDownArrow.classList.add("active");
    signupUpArrow.classList.remove("active");
})



loginClose.addEventListener("click", (e) => {
    e.stopPropagation();
    headerLogin.classList.remove("show-desktop");
    loginDownArrow.classList.add("active");
    loginUpArrow.classList.remove("active");
})




loginBtnLi.addEventListener("click", (e) => {
    loginUpArrow.classList.add("active");
    loginDownArrow.classList.remove("active");
    megaMenu.classList.remove("show-desktop");
    exploreUpArrow.classList.remove("active");
    exploreDownArrow.classList.add("active");
    headerSignUp.classList.remove("show-desktop");
    signupUpArrow.classList.remove("active");
    signupDownArrow.classList.add("active");
 
    headerLogin.classList.add("show-desktop");
    
})
