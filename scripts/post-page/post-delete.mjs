const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const postID = urlParams.get("id");

import { deleteEntryURL } from "../api/api-urls.mjs";
const urlToBeDeleted = `${deleteEntryURL}${postID}`;

import { deleteEntry } from "./api-call-delete-post.mjs";

const buttonContainer = document.querySelector("#button-container");
const deleteButton = document.querySelector("#delete-button");
buttonContainer.style.display = "none";

deleteButton.addEventListener("click", clickAndDeletePost);
function clickAndDeletePost() {
  deleteEntry(urlToBeDeleted);
}
