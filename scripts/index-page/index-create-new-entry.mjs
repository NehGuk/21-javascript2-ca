
// API URLs
import { newEntryURL } from "../api/api-urls.mjs";

// API call
import { sendNewPost } from "./api-call-create-new-entry.mjs";

// Variables and function to refresh the feed after post is new post is submitted
import { getPosts } from "./api-call-get-posts.mjs";
import { allPostsURL } from "../api/api-urls.mjs";

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
    
    if (!postContent.media) {
        postContent.media = "https://www.discover-the-world.com/app/uploads/2019/08/norway-senja-aurora-sky-istk.jpg";
    }

    // Send post object to API
    sendNewPost(newEntryURL, postContent);
    
    // Clear form fields
    event.target.reset();

    // Refresh the post feed
    // Call the getPosts function again?
    // Or use location.href = form.action;?
};

