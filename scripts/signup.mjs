// API URLs
import { API_BASE_URL } from "./api/api-urls.mjs";
import { registerURL } from "./api/api-urls.mjs";

// Function to register user
import { registerUser } from "./api/api-call-register.mjs";

// Form variables
const form = document.querySelector("#signupform");
const registerErrorMessage = document.querySelector(".register-error-message");

// Hide the error message by default
registerErrorMessage.style.display = "none";

// Adding an event listener for the sign up button
form.addEventListener("submit", createAndRegisterUser);

function createAndRegisterUser(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const userProfile = Object.fromEntries(myFormData.entries());
    console.log(userProfile);
    registerUser(registerURL, userProfile);
}



