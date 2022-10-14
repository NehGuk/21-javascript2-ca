import { displayUserProfile } from "../profile-page/profile-display-user-profile.mjs";
export async function getUserProfile(url) {
    try {

        const token = localStorage.getItem("accessToken");
        const userName = localStorage.getItem("userName");

        const fetchingOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        };

        const response = await fetch(url, fetchingOptions);
        const userProfile = await response.json();
        //console.log(response);
        //console.log(userProfile);
        
        displayUserProfile(userProfile);
    } catch(error) {
        console.log(error);
    }
}

//getUserProfile();