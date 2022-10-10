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
        console.log(userProfile.name);
        console.log(userProfile.email);

        async function displayUserProfile() {

            if (!userProfile.avatar) {
                userProfile.avatar = "/assets/image-sample.jpg";
            }

            const profileContainer = document.querySelector("#profile-main-container");
            profileContainer.innerHTML = "";
            profileContainer.innerHTML = `

                <h1 class="text-center">My profile</h1>
                <div class="text-center">
                <img src="${userProfile.avatar}" alt="Bootstrap" width="200" height="200" class="rounded-circle border border-white mb-4">
                </div>
                <p class="text-center"><b>Name: </b>${userProfile.name}</p>
                <p class="text-center"><b>Email: </b>${userProfile.email}</p>
                <hr>
            
            `;
        }
        displayUserProfile();
    } catch(error) {
        console.log(error);
    }
}

//getUserProfile();