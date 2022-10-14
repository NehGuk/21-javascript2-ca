import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";

export async function sendNewPost(url, newPost) {
    try {        
        const [authGet, authPost] = authFetchOptionsArray;
        authPost["body"] = JSON.stringify(newPost),
        console.log(authPost);

        const response = await fetch(url, authPost);
        const myPost = await response.json();

        // Refreshing the page
        location.href = "/index.html";

    } catch(error) {
        console.log(error);
    }
};
