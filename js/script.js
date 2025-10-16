// Get DOM Content
let signUpScreen =  document.querySelector(".sign-up-screen");
let errMessage = document.querySelector(".error-msg");
let newsletterEmail = document.querySelector("#email");
let subscribeButton = document.querySelector("#subscribe-btn");
let successEmail = document.querySelector(".visitor-email");
let dismissMsgBtn = document.querySelector("#dismiss-msg");
let successScreen = document.querySelector(".success-screen");


subscribeButton.addEventListener("click", function () {
 
    if (validateEmail(newsletterEmail.value)) {
        alert("email is valid")
    } else {
        console.log("Email is invalid")
    }

   

});



function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
 
}