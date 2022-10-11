
// Function to get the API data (all posts)
import { allPostsURL } from "./api/api-urls.mjs";
import { getPosts } from "./api/api-call-get-posts.mjs";

// Importing display posts function
import { displayAllPosts } from "./api/api-call-get-posts.mjs";

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
        }

    }
    displayAllPosts(filteredArray);
    console.log(filteredArray);


});








