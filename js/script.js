// Get DOM Content
let signUpScreen =  document.querySelector(".sign-up-screen");
let labelErr = document.querySelector(".label-err");
let validationMessage = document.querySelector(".message");
let newsletterEmail = document.querySelector("#email");
let subscribeButton = document.querySelector("#subscribe-btn");
let successEmail = document.querySelector(".visitor-email");
let dismissMsgBtn = document.querySelector("#dismiss-msg");
let successScreen = document.querySelector(".success-screen");


// Update views TODO: remove success screen
dismissMsgBtn.addEventListener("click", resetViews);     

// On submit 
subscribeButton.addEventListener("click", function () {
//  validations
    if (validateEmail(newsletterEmail.value)) {
         // Update views 
        signUpScreen.classList.add("hidden");
        successScreen.classList.remove("hidden");
        successEmail.textContent = newsletterEmail.value;
       
    } else if (newsletterEmail.value === "") {
        
                  validationMessage.textContent = "Valid email required"
                  validationMessage.classList.remove("valid-msg")
                  validationMessage.classList.add("error-msg");
                      
            }
    
    else {
         
                  validationMessage.textContent = "Valid email required"
                  validationMessage.classList.remove("valid-msg")
                  validationMessage.classList.add("error-msg");
       
    }

   

});


// validate on keypress
document.addEventListener("input", function () {
    if (validateEmail(newsletterEmail.value)) {
        newsletterEmail.addEventListener("keypress", function () {
         
            if (validateEmail(newsletterEmail.value)) {
                     validationMessage.classList.add("valid-msg");
                     validationMessage.textContent = "Valid email";
                     validationMessage.classList.remove("error-msg");
            }
            
            else {
                     validationMessage.classList.remove("valid-msg");
                     validationMessage.textContent = "Invalid email";
                     validationMessage.classList.add("error-msg");
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


function resetViews() {
      // Update views TODO: remove success screen
        signUpScreen.classList.remove("hidden");
        successScreen.classList.add("hidden");

        // Clear input field value
    newsletterEmail.value = "";
}