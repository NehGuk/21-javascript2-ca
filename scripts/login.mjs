localStorage.clear();

// API URLs
import { loginURL } from "./api/api-urls.mjs";

// Function to login user
import { loginUser } from "./api/api-call-login.mjs";

// Form variables
const form = document.querySelector("#loginform");
export const loginErrorMessage = document.querySelector(".login-error-message");

// Hide the error message by default
loginErrorMessage.style.display = "none";

// Adding an event listener to the form
form.addEventListener("submit", checkAndLoginUser);

function checkAndLoginUser(event) {
    event.preventDefault();
    // creating a user object from the input fields
    const myFormData = new FormData(event.target);
    const userToLogin = Object.fromEntries(myFormData.entries());
    // API call to login user
    loginUser(loginURL, userToLogin);

    // direct user to Profile page after login in
    // location.href = form.action;

};
