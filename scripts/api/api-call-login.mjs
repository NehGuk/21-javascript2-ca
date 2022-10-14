export async function loginUser(url, userData) {
    try {
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        }
        const response = await fetch(url, postData);    
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
            location.href = `/profile.html?userName=${userName}`
        }        
    } catch(error) {
        console.log(error);
    }
};

// Example:
// loginUser(loginURL, userToLogin);
