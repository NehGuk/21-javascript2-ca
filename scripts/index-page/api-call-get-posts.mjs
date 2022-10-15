import { displayAllPosts } from "./index-display-all-posts.mjs";
import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";

/**
 * Make API call to get and display posts
 * @param {string} url Specific URL from API
 * @example
 * ```js
 * // Fetch posts from API
 * const url = "https://nf-api.onrender.com/api/v1/social/posts?_author=true"
 * // A 'post' object will be created and assigned as 'window.posts'
 * window.posts = posts;
 * // The displayPosts function will be called with 'posts' as a parameter
 * ```
 */
export async function getPosts(url) {
    try {
        const [authGet, authPost] = authFetchOptionsArray;
        
        const response = await fetch(url, authGet);
        const posts = await response.json();
        console.log(response);
        console.log(posts);
        
        window.posts = posts;
        displayAllPosts(posts);
        
    } catch(error) {
        console.log(error);
    }
};