export async function sendAvatar(url, avatarMediaObject) {
    try {
        console.log("Sending avatar");
        console.log(url, avatarMediaObject);

        const token = localStorage.getItem("accessToken");
        
        const putMethod = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                
            },
            body: JSON.stringify(avatarMediaObject),
        };

        const response = await fetch(url, putMethod);
        const json = await response.json();
        console.log(response);
        console.log(json);
        location.reload();

    } catch(error) {
        console.log(error);
    }
};
