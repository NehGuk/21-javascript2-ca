export async function deleteEntry(url) {
    try {
        console.log("Eita");

        const token = localStorage.getItem("accessToken");

        const deleteData = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }
        const response = await fetch(url, deleteData);
        const json = await response.json();
        // Directing user to another page after deletion
        location.href = "/index.html";

    } catch(error) {
        console.log(error);
    }
};
