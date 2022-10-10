// ----------- GET AND DISPLAY POSTS IN FEED
// API URLs
import { API_BASE_URL } from "./api/api-urls.mjs";
import { allPostsURL } from "./api/api-urls.mjs";
import { allPostsURLAsc } from "./api/api-urls.mjs";
import { allPostsURLDesc } from "./api/api-urls.mjs";

// Function to get all posts
import { getPosts } from "./api/api-call-get-posts.mjs";

// Buttons
const buttonNewestFirst = document.querySelector("#filter-desc");
const buttonOldestFirst = document.querySelector("#filter-asc");

// Button filter: oldest first
buttonOldestFirst.addEventListener("click", filterAsc);
function filterAsc() {
    getPosts(allPostsURLAsc);
};

// Button filter: newest first
buttonNewestFirst.addEventListener("click", filterDesc);
function filterDesc() {
    getPosts(allPostsURLDesc);
};


