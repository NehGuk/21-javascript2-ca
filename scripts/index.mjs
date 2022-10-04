// API URLs
import { API_BASE_URL } from "./api/api-urls.mjs";
import { allPostsURL } from "./api/api-urls.mjs";

// console.log(allPostsURL);

// Function to get all posts
import { getPosts } from "./api/api-call-get-posts.mjs";

// Function to create the post HTML
getPosts(allPostsURL);


