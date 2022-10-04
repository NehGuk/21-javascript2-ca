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
        // console.log(response);
        const json = await response.json();
        // console.log(json);
        
        // getting and storing the access token
        // console.log(json.accessToken);
        const accessToken = json.accessToken;
        localStorage.setItem("accessToken", accessToken);
        
        // getting and storing the username
        const userName = json.name;
        console.log(userName);
        localStorage.setItem("userName", userName);

        // add the user name to as a query string
        // make the form action direct to the profile page
        //

    } catch(error) {
        console.log(error);
    }

};

// Example:
// loginUser(loginURL, userToLogin);
