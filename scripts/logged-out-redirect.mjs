// Logged out users are directed to login page
const userName = localStorage.getItem("userName");
if (!userName) {
    location.href = "/login.html";
}