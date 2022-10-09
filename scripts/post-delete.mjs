// Get the post ID from the URL query string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const postID = urlParams.get("id");

// API URL
import { deleteEntryURL } from "./api/api-urls.mjs";
const urlToBeDeleted = `${deleteEntryURL}${postID}`;

// Function to delete post
import { deleteEntry } from "./api/api-call-delete-post.mjs";

// Delete container variables
const buttonContainer = document.querySelector("#button-container");
const deleteButton = document.querySelector("#delete-button");
buttonContainer.style.display = "none";

// Delete button add event listener
deleteButton.addEventListener("click", clickAndDeletePost);

function clickAndDeletePost() {
    deleteEntry(urlToBeDeleted);
}