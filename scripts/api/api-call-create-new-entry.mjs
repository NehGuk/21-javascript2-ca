export async function sendNewPost(url, newPost) {
    try {
        const token = localStorage.getItem("accessToken");
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                
            },
            body: JSON.stringify(newPost),
        };

        const response = await fetch(url, postData);
        const myPost = await response.json();

        // Refreshing the page
        location.href = "/index.html";

    } catch(error) {
        console.log(error);
    }
};

