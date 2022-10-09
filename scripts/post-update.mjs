// Get the post ID from the URL query string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const postID = urlParams.get("id");

// API URLs
import { updateEntryURL } from "./api/api-urls.mjs";

// URL to update
export const URLToBeUpdated = `${updateEntryURL}${postID}`;
console.log(URLToBeUpdated);


// Function to update post
import { updateEntry } from "./api/api-call-update-post.mjs";

// Update container variables
export const postContainer = document.querySelector("#main-post-container");
export const buttonContainer = document.querySelector("#button-container");
export const updateButton = document.querySelector("#update-button");
buttonContainer.style.display = "none";

// Update button add event listener
updateButton.addEventListener("click", showUpdateForm);

async function showUpdateForm() {
    buttonContainer.style.display = "none";
    updateEntry(URLToBeUpdated);
}

