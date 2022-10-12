// add date format
import { displayUserPosts } from "../profile-display-user-posts.mjs";
export async function getUserPosts(url) {
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
        const userPosts = userProfile.posts;
        console.log(response);
        //console.log(userProfile.posts);
        
        displayUserPosts(userPosts);
    } catch(error) {
        console.log(error);
    }
}

//getUserProfile();