import { newEntryURL } from "../api/api-urls.mjs";
import { sendNewPost } from "./api-call-create-new-entry.mjs";

const newPostFormContainer = document.querySelector("#new-post-form-container");
newPostFormContainer.style.display = "none";
const newPostButton = document.querySelector("#cta-container");
newPostButton.addEventListener("click", showPostForm);
function showPostForm() {
    newPostFormContainer.style.display = "block";
    newPostButton.style.display = "none";
}

const form = document.querySelector("#add-post-form");
form.addEventListener("submit", createAndSendPost);

/**
 * Creates a post object and sends it to API
 * @param {MyEvent} event The observable event
 * @listens MyEvent
 * @example
 * ```js
 * // Object called postContent is created from form input fields
 * // The function sendNewPost is called to send the object to the specific API URL
 * sendNewPost(newEntryURL, postContent);
 * ```
 */
function createAndSendPost(event) {
    event.preventDefault();
    
    const myFormData = new FormData(event.target);
    const postContent = Object.fromEntries(myFormData.entries());
    
    if (!postContent.media) {
        postContent.media = "https://www.discover-the-world.com/app/uploads/2019/08/norway-senja-aurora-sky-istk.jpg";
    }

    sendNewPost(newEntryURL, postContent);
    event.target.reset();

};
