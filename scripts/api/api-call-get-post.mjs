// Get singlePost base URL
import { singlePostURL } from "./api-urls.mjs";
import { extra } from "./api-urls.mjs";

// Function do display post
import { displayPost } from "../post-display-post.mjs";

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
        const token = localStorage.getItem("accessToken");
        const fetchingOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        };
        const response = await fetch(postURL, fetchingOptions);
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

