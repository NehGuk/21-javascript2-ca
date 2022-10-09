export async function createNewEntry(url, entryContent) {
    const token = localStorage.getItem("accessToken");
    const postData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(entryContent),
    }
    const response = await fetch(url, postData);
    const postEntry = await (response).json(); 
};

// updating file