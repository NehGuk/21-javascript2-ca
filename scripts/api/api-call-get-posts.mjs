import { displayAllPosts } from "../index-display-all-posts.mjs";
export async function getPosts(url) {
    try {
        const token = localStorage.getItem("accessToken");
        const fetchingOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        }
        const response = await fetch(url, fetchingOptions);
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