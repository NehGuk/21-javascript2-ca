const token = localStorage.getItem("accessToken");

export const authFetchOptionsArray = [
    // get all posts, get user posts, get user post, get user profile
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    },

    // create new entry, register user
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: "",
    },

    // send avatar, update post
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: "",
    },

    // delete post
    {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    },

    // login
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: "",
    },

];





