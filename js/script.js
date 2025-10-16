// Get DOM Content
let signUpScreen =  document.querySelector(".sign-up-screen");
let labelErr = document.querySelector(".label-err");
let errMessage = document.querySelector(".error-msg");
let validMsg = document.querySelector(".valid-msg");
let newsletterEmail = document.querySelector("#email");
let subscribeButton = document.querySelector("#subscribe-btn");
let successEmail = document.querySelector(".visitor-email");
let dismissMsgBtn = document.querySelector("#dismiss-msg");
let successScreen = document.querySelector(".success-screen");



// 
subscribeButton.addEventListener("click", function () {
 
    if (validateEmail(newsletterEmail.value)) {
        
       
    }  else if (newsletterEmail.value === "") {
                    validMsg.textContent = "Valid email required";
                    validMsg.classList.remove("valid-msg")
                     validMsg.classList.add("error-msg");
            }
    
    else {
        errMessage.textContent = "Valid email required"
        document.querySelector(".error-msg").style.display = "none";
    }

   

});


// validate on keypress
document.addEventListener("input", function () {
    if (validateEmail(newsletterEmail.value)) {
        newsletterEmail.addEventListener("keypress", function () {
         
            if (validateEmail(newsletterEmail.value)) {
                     validMsg.classList.add("valid-msg");
                     validMsg.textContent = "Valid email";
                     validMsg.classList.remove("error-msg");
            }
            
            else {
                     validMsg.classList.remove("valid-msg");
                     validMsg.textContent = "Invalid email";
                     validMsg.classList.add("error-msg");
            }
        })
 
    } else if (newsletterEmail.value === "") {
            // Reload if input field is empty
         this.location.reload();
              
       
    } 
    
})


// Email validation function below
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
 
}
