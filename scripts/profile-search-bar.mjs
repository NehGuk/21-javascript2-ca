// Using ``window.userPosts`` to get the array from the current API call

// Importing display posts function
import { displayUserPosts } from "./profile-display-user-posts.mjs";

// Variables
const searchInput = document.querySelector("#search-input");
const clearButton = document.querySelector("#clear-button");
const errorMessageContainer = document.querySelector("#error-message-container");



searchInput.addEventListener("input", (event) => {
    let value = event.target.value;
    let filteredArray = [];

    // Add a for loop checking the input from the search bar
    for (let i = 0; i < window.userPosts.length; i++) {
        let currentPost = window.userPosts[i];

        if (currentPost.title.toLowerCase().includes(value.toLowerCase()) || currentPost.body.toLowerCase().includes(value.toLowerCase()) || currentPost.owner.toLowerCase().includes(value.toLowerCase())) {
            filteredArray.push(currentPost);
            errorMessageContainer.innerHTML = ``;

        } else if (filteredArray.length === 0) {
            errorMessageContainer.innerHTML = `
                <p class="text-center text-secondary">Oooops! No posts match the search terms.</p>
            `;
        }
    }
    displayUserPosts(filteredArray);
});

// Clear button
clearButton.addEventListener("click", clearSearchField);    
function clearSearchField() {
    searchInput.value = "";
    displayUserPosts(window.userPosts);
    errorMessageContainer.innerHTML = ``;
};