// Get the post ID from the URL query string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const postID = urlParams.get("id");

// API URL
import { updateEntryURL } from "./api/api-urls.mjs";

// Function to update post
import { updateEntry } from "./api/api-call-update-post.mjs";


// Update container variables
const buttonContainer = document.querySelector("#button-container");
const updateButton = document.querySelector("#update-button");
buttonContainer.style.display = "none";

// Update button add event listener
updateButton.addEventListener("click", updateEntry);
