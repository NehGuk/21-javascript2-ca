const token = localStorage.getItem("accessToken");

export const authFetchOptionsArray = [
    // get all posts, get user posts, get user profile
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    },

    // create new entry
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: "",
    },

    // send avatar
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: "",
    },

];





