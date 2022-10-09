
// API URLs
import { newEntryURL } from "./api/api-urls.mjs";

// API call
import { sendNewPost } from "./api/api-call-create-new-entry.mjs";

// Variables and function to refresh the feed after post is new post is submitted
import { getPosts } from "./api/api-call-get-posts.mjs";
import { allPostsURL } from "./api/api-urls.mjs";

// Form variables
const form = document.querySelector("#add-post-form");

// Form event listener
form.addEventListener("submit", createAndSendPost);

function createAndSendPost(event) {
    event.preventDefault();
    
    console.log("Working");

    // Create post object from form fields
    const myFormData = new FormData(event.target);
    const postContent = Object.fromEntries(myFormData.entries());

    // Send post object to API
    sendNewPost(newEntryURL, postContent);
    
    // Clear form fields
    event.target.reset();

    // Refresh the post feed
    getPosts(allPostsURL);
    


};

