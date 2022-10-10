// API URL 
import { userProfileURL } from "./api/api-urls.mjs";
import { extraProfileURL } from "./api/api-urls.mjs";
const userName = localStorage.getItem("userName");
const userURLToLoad = `${userProfileURL}${userName}${extraProfileURL}`;
console.log(userURLToLoad);

// Function to load user profile info
import { getUserProfile } from "./api/api-call-get-user-profile.mjs";
getUserProfile(userURLToLoad);

