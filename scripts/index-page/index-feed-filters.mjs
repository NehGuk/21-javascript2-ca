// ----------- GET AND DISPLAY POSTS IN FEED
// API URLs
import { API_BASE_URL } from "../api/api-urls.mjs";
import { allPostsURL } from "../api/api-urls.mjs";
import { allPostsURLAsc } from "../api/api-urls.mjs";
import { allPostsURLDesc } from "../api/api-urls.mjs";

// Function to get all posts
import { getPosts } from "../index-page/api-call-get-posts.mjs";

// Buttons
const buttonNewestFirst = document.querySelector("#filter-desc");
const buttonOldestFirst = document.querySelector("#filter-asc");

// Button filter: oldest first
buttonOldestFirst.addEventListener("click", filterAsc);
/**
 * Filters posts in ascendant order
 * @example
 * 
 * ```js
 * // Function getPosts is passed with specifi API URL
 * getPosts(allPostsURLAsc);
 * ```
 */
function filterAsc() {
    buttonOldestFirst.classList.add("active");
    buttonNewestFirst.classList.remove("active");
    getPosts(allPostsURLAsc);
};

// Button filter: newest first
buttonNewestFirst.addEventListener("click", filterDesc);
/**
 * Filters posts in descendent order
 * @example
 * 
 * ```js
 * // Function getPosts is passed with specifi API URL
 * getPosts(allPostsURLDesc);
 * ```
 */
function filterDesc() {
    buttonNewestFirst.classList.add("active");
    buttonOldestFirst.classList.remove("active");
    getPosts(allPostsURLDesc);
};
