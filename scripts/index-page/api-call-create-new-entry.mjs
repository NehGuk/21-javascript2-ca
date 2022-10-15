import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";

/**
 * API call to send new post to API
 * @param {string} url Specific post URL from API
 * @param {object} newPost An object containing the key-value pairs required by the API
 * @example
 * ```js
 * sendNewPost(newEntryURL, postContent);
 * // An object called myPost will be created
 * // User is directed to index.html
 * ```
 */
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