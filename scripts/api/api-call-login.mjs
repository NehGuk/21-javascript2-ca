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
        console.log(response);
        const json = await response.json();
        console.log(json);
        
    } catch(error) {
        console.log(error);
    }

};

// Example:
// loginUser(loginURL, userToLogin);
