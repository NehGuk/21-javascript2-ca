// Importing display posts function
import { displayAllPosts } from "./index-display-all-posts.mjs";

// Function to get the API data (all posts)
import { allPostsURL } from "./api/api-urls.mjs";
import { getPosts } from "./api/api-call-get-posts.mjs";

// Calling the function to lead the posts
getPosts(allPostsURL);

// Search bar variables
const searchInput = document.querySelector("#search-input");
const clearButton = document.querySelector("#clear-button");

// Search event listener
searchInput.addEventListener("input", (event) => {
    let value = event.target.value;
    console.log(value);
    //console.log("Testing:", window.posts);
    //console.log(window.posts[0].author.name);
    let filteredArray = [];

    // Add a for loop checking the input from the search bar
    for (let i = 0; i < window.posts.length; i++) {
        let currentPost = window.posts[i];

        if (currentPost.title.includes(value) || currentPost.body.includes(value) || currentPost.author.name.includes(value)) {
            filteredArray.push(currentPost);
            const errorMessageContainer = document.querySelector("#error-message-container");
            errorMessageContainer.innerHTML = ``;

        } else if (filteredArray.length === 0) {
            const errorMessageContainer = document.querySelector("#error-message-container");
            errorMessageContainer.innerHTML = `
                <p class="text-center text-secondary">Oooops! No posts match the search terms.</p>
            `;
        }

    }
    displayAllPosts(filteredArray);
    console.log(filteredArray);

});








