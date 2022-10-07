// API URLs
import { newEntryURL } from "./api/api-urls.mjs";

// Function to create new entry
import { createNewEntry } from "./api/api-call-create-new-entry.mjs";

// Form variables
const form = document.querySelector("#add-post-form");

// Add event listener to PUBLISH button
form.addEventListener("submit", createPostAndSendEntry);

function createPostAndSendEntry(event) {
    event.preventDefault();
    console.log("Clicked!");
    
    // Create object from form fields
    const myFormData = new FormData(event.target);
    const postContent = Object.fromEntries(myFormData.entries());
    console.log(postContent);

    // Call function to create new entry
    createNewEntry(newEntryURL, postContent);
    
    // Refresh the post feed somehow
    location.href = form.action;

    // another option is event.target.reset();, and then refresh the feed by calling the function again.

};