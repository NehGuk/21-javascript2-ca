import { sendNewPost } from "./api/api-call-create-new-entry.mjs";


// Form variables
const form = document.querySelector("#add-post-form");
console.log(form);

// Form event listener
form.addEventListener("submit", createAndSendPost);

async function createAndSendPost(event) {
    event.preventDefault();
    event.target.reset();
    console.log("Working");

    // Create post object from form fields
    const myFormData = new FormData(event.target);
    const postContent = Object.fromEntries(myFormData.entries());
    console.log(postContent);

    // Send post object to API
    sendNewPost();

};

