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

        // direct user to Profile page after login in AND add the user name to as a query string
        location.href = `/profile.html?profile=${userName}`

    } catch(error) {
        console.log(error);
    }

};

// Example:
// loginUser(loginURL, userToLogin);
