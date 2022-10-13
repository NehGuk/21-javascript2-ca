export async function displayUserProfile(userProfile) {

    if (!userProfile.avatar) {
        userProfile.avatar = "/assets/image-sample.jpg";
    }

    const profileContainer = document.querySelector("#profile-main-container");
    profileContainer.innerHTML = "";
    profileContainer.innerHTML = `

        <h1 class="text-center">My profile</h1>
            
        <!-- profile avatar -->
        <div class="text-center">
        <img src="${userProfile.avatar}" alt="Bootstrap" width="200" height="200" class="rounded-circle border border-white ">
        </div>

        <!-- change avatar form -->
        <div class="container px-4 py-5 col-lg-5 col-sm-12 text-center" id="form-change-avatar-container">
        <form action="" id="form-change-avatar">

            <!-- image url input -->
            <div id="image-input">
            <input type="url" name="media" id="media" class="form-control" placeholder="Media URL" maxlength="1000" title="Example: https://upload.wikimedia.org/wikipedia/commons/1/13/Red_Knot_1_-_Boat_Harbour.jpg">
            <label for="name"></label>
            </div>
            
            <!-- change avatar button -->
            <button class="btn btn-small btn-primary" type="button" id="change-avatar-button">Change avatar</button>

            <!-- send button -->
            <button class="btn btn-small btn-primary" type="submit" id="send-avatar-button">Send</button>
            <br>
            <br>
        </form>
        </div>

        <!-- profile info -->
        <p class="text-center"><b>Name: </b>${userProfile.name}</p>
        <p class="text-center"><b>Email: </b>${userProfile.email}</p>  
        <hr>  
    `;

    // Hiding image input and send-avatar button
    const imageInput = document.querySelector("#image-input");
    const changeAvatarButton = document.querySelector("#change-avatar-button");
    const sendAvatarButton = document.querySelector("#send-avatar-button");
    imageInput.style.display = "none";
    sendAvatarButton.style.display = "none";

    changeAvatarButton.addEventListener("click", displayFieldAndSendButton);
    function displayFieldAndSendButton() {
        imageInput.style.display = "block";
        sendAvatarButton.style.display = "inline-block";
        changeAvatarButton.style.display = "none";
    };

}


