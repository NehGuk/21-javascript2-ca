// API URL 
import { userProfileURL } from "./api/api-urls.mjs";
import { extraProfileURL } from "./api/api-urls.mjs";
const userName = localStorage.getItem("userName");
const userURLToLoad = `${userProfileURL}${userName}${extraProfileURL}`;

// Function to load user profile info
import { getUserProfile } from "./api/api-call-get-user-profile.mjs";
getUserProfile(userURLToLoad);

// Function to get user posts
import { getUserPosts } from "./api/api-call-get-user-posts.mjs";
getUserPosts(userURLToLoad);