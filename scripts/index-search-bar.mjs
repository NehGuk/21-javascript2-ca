// Using ``window.posts`` to get the array from the previous API call
// console.log(window.posts);
// console.log(window.posts[0].author.name);

// Importing display posts function
import { displayAllPosts } from "./index-display-all-posts.mjs";

// Variables
const searchInput = document.querySelector("#search-input");
const clearButton = document.querySelector("#clear-button");
const errorMessageContainer = document.querySelector("#error-message-container");

// Search field event listener
searchInput.addEventListener("input", (event) => {
    let value = event.target.value;
    let filteredArray = [];

    // Add a for loop checking the input from the search bar
    for (let i = 0; i < window.posts.length; i++) {
        let currentPost = window.posts[i];

        if (currentPost.title.toLowerCase().includes(value.toLowerCase()) || currentPost.body.toLowerCase().includes(value.toLowerCase()) || currentPost.author.name.toLowerCase().includes(value.toLowerCase())) {
            filteredArray.push(currentPost);
            errorMessageContainer.innerHTML = ``;

        } else if (filteredArray.length === 0) {
            errorMessageContainer.innerHTML = `
                <p class="text-center text-secondary">Oooops! No posts match the search terms.</p>
            `;
        }
    }
    displayAllPosts(filteredArray);
});

// Clear button
clearButton.addEventListener("click", clearSearchField);    
function clearSearchField() {
    searchInput.value = "";
    displayAllPosts(window.posts);
    errorMessageContainer.innerHTML = ``;
};

