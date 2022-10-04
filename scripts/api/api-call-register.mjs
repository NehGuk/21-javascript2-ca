export async function registerUser(url, userData) {
    try {
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        const json = await response.json();
        console.log(json);

        // getting and storing username
        const userName = json.name;
        localStorage.setItem("userName", userName);

        // direct user to Profile page after login in AND add the user name to URL as a query string
        location.href = `/profile.html?profile=${userName}`

    } catch(error) {
        console.log(error);
    }
};

// Example:
// registerUser(registerURL, userProfile);


    
    


 