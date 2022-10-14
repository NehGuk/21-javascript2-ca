import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";
export async function registerUser(url, userData) {
    try {
        /* const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        }; */

        const [authGet, authPost] = authFetchOptionsArray;
        authPost["body"] = JSON.stringify(userData);

        const response = await fetch(url, authPost);
        const json = await response.json();
        console.log(json);

        // getting and storing username
        const userName = json.name;
        localStorage.setItem("userName", userName);

        // direct user to Login page
        location.href = "/signup-thank-you.html";

    } catch(error) {
        console.log(error);
    }
};

// Example:
// registerUser(registerURL, userProfile);


    
    


 