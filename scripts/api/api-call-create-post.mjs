import { createPostURL } from "./api-urls.mjs";

export async function createNewPost() {
    try {
        console.log("Create new post function");
        console.log(createPostURL);
    
        const token = localStorage.getItem("accessToken");

        const response = await fetch(createPostURL);
        const newPost = await response.json();

    } catch(error) {
        console.log(error);
    }
};