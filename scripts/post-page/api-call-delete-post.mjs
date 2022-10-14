import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";
export async function deleteEntry(url) {
    try {
        const [authGet, authPost, authPut, authDelete] = authFetchOptionsArray;

        const response = await fetch(url, authDelete);
        const json = await response.json();
        // Directing user to another page after deletion
        location.href = "/profile.html";

    } catch(error) {
        console.log(error);
    }
};
