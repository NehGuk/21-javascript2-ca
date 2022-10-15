localStorage.clear();
import { loginURL } from "../api/api-urls.mjs";
import { loginUser } from "../login-page/api-call-login.mjs";

const form = document.querySelector("#loginform");
form.addEventListener("submit", checkAndLoginUser);
function checkAndLoginUser(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const userToLogin = Object.fromEntries(myFormData.entries());
    loginUser(loginURL, userToLogin);
};
