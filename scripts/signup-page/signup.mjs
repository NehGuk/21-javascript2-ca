localStorage.clear();
import { registerURL } from "../api/api-urls.mjs";
import { registerUser } from "./api-call-register.mjs";

const form = document.querySelector("#signupform");
const registerErrorMessage = document.querySelector(".register-error-message");

registerErrorMessage.style.display = "none";

form.addEventListener("submit", createAndRegisterUser);
function createAndRegisterUser(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const userProfile = Object.fromEntries(myFormData.entries());
    registerUser(registerURL, userProfile);
}
