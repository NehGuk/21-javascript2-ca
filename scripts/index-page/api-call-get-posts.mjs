import { displayAllPosts } from "./index-display-all-posts.mjs";
import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";
export async function getPosts(url) {
    try {
        const [authGet, authPost] = authFetchOptionsArray;
        
        const response = await fetch(url, authGet);
        const posts = await response.json();
        console.log(response);
        console.log(posts);
        
        // Creating a variable containing the posts array from the API call
        window.posts = posts;
        
        displayAllPosts(posts);
        

    } catch(error) {
        console.log(error);
    }
};


// Example
// getPosts(allPostsURL);