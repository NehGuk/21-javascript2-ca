export async function getUserProfile(url) {
    try {

        const token = localStorage.getItem("accessToken");
        const userName = localStorage.getItem("userName");

        const fetchingOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        };

        console.log("Workinggggg yeeeap");
        const response = await fetch(url, fetchingOptions);
        const userProfile = await response.json();
        console.log(response);
        console.log(userProfile);

        async function displayUserProfile() {
            console.log("Displaying");
        }
        displayUserProfile();


    } catch(error) {
        console.log(error);
    }

}

//getUserProfile();