import { displayUserProfile } from "../profile-page/profile-display-user-profile.mjs";
import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";
export async function getUserProfile(url) {
    try {
        const [getProfile] = authFetchOptionsArray;
        const response = await fetch(url, getProfile);
        const userProfile = await response.json();
        displayUserProfile(userProfile);
    } catch(error) {
        console.log(error);
    }
}
