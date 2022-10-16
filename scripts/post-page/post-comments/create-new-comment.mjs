import { sendCommentURL } from "../../api/api-urls.mjs";
import { sendNewComment } from "./api-call-send-comment.mjs";

// get right URL to send comment
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const postID = urlParams.get("id");

const postCommentURL = `${sendCommentURL}${postID}/comment`;

// create object from form inputs
const form = document.querySelector("#add-post-form");
form.addEventListener("submit", createAndSendComment);
function createAndSendComment(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);
  const commentContent = Object.fromEntries(myFormData.entries());
  sendNewComment(postCommentURL, commentContent);
  event.target.reset();
}
