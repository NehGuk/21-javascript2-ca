const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
export const postID = urlParams.get("id");

import { updateEntryURL } from "../api/api-urls.mjs";

export const URLToBeUpdated = `${updateEntryURL}${postID}`;

import { updateEntry } from "./api-call-update-post.mjs";

export const postContainer = document.querySelector("#main-post-container");
export const buttonContainer = document.querySelector("#button-container");
export const updateButton = document.querySelector("#update-button");
buttonContainer.style.display = "none";

updateButton.addEventListener("click", showUpdateForm);

async function showUpdateForm() {
    buttonContainer.style.display = "none";
    updateEntry(URLToBeUpdated);
}
