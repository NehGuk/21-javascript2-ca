// Get singlePost base URL
import { singlePostURL } from "../api/api-urls.mjs";
import { extra } from "../api/api-urls.mjs";

// Function do display post
import { displayPost } from "./post-display-post.mjs";
import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";

// Get the post ID from the URL query string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const postID = urlParams.get("id");

// Create specific post URL based on post ID
export const postURL = `${singlePostURL}${postID}${extra}`;
export const postURLToUpdate = `${singlePostURL}${postID}`;

// Create function to fetch the post data
export async function getPost(url) {
    try {
        const userName = localStorage.getItem("userName");
        const[authGet] = authFetchOptionsArray;

        const response = await fetch(postURL, authGet);
        const post = await response.json();
        window.post = post;
        
        displayPost();    
        
        console.log(post.author.name);
        console.log(userName);
        const buttonContainer = document.querySelector("#button-container");
        if (post.author.name === userName) {
            buttonContainer.style.display = "block";
        } else {
        };

    } catch(error) {
        console.log(error);
    }
};

