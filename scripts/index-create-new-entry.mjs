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

    const postContent = {

    };

    // Call function to create new entry
    createNewEntry();
    console.log(newEntryURL);



    // Refresh the post feed somehow


};