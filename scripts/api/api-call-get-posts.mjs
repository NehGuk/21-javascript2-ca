// const API_BASE_URL = `https://nf-api.onrender.com`;
// const allPostsURL = `${API_BASE_URL}/api/v1/social/posts`;

export async function getPosts(url) {
    try {
        const token = localStorage.getItem("accessToken");
        const fetchingOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        }
        const response = await fetch(url, fetchingOptions);
        const json = await response.json();
        console.log(response);
        console.log(json);
    } catch(error) {
        console.log(error);
    }
};

// Example
// getPosts(allPostsURL);