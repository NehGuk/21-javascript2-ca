// Function to get the API data (all posts)
import { getPosts } from "./api/api-call-get-posts.mjs";
import { allPostsURL } from "./api/api-urls.mjs";
getPosts(allPostsURL);

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

searchInput.addEventListener("input", (e) => {
    let value = e.target.value;
    console.log(value);



});