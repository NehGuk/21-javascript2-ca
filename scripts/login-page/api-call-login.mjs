import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";
export async function loginUser(url, userData) {
    try {
        const [authGet, authPost, authPut, authDelete, authLogin] = authFetchOptionsArray;
        authLogin["body"] = JSON.stringify(userData);
        //console.log(userData);

        const response = await fetch(url, authLogin);    
        const json = await response.json();
        
        // getting and storing the access token
        const accessToken = json.accessToken;
        localStorage.setItem("accessToken", accessToken);
        
        // getting and storing username
        const userName = json.name;
        localStorage.setItem("userName", userName);

        // getting and storing access token
        const token = json.accessToken;
        localStorage.setItem("accessToken", token);

        // getting and storing avatar
        const avatar = json.avatar;
        localStorage.setItem("avatar", avatar);

        // Display login error message, if necessary
        const loginErrorMessage = document.querySelector("#login-error-message");
        
        if (json.message === "Invalid email or password") {
            loginErrorMessage.innerHTML = `
                <p>${json.message}</p>
            `;
        } else {
            loginErrorMessage.innerHTML = ``;
            // getting and storing empty avatar
            if (avatar.length === 0) {
                const noAvatar = "/assets/image-sample.jpg";
                localStorage.setItem("avatar", noAvatar);
            }
            location.href = `/profile.html?userName=${userName}`
        }        
    } catch(error) {
        console.log(error);
    }
};

// Example:
// loginUser(loginURL, userToLogin);
