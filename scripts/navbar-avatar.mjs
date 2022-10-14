function addAvatarToNavbar() {
    // Get avatar from local storage
    const avatar = localStorage.getItem("avatar");
    // Add avatar to navbar
    const avatarNavBar = document.querySelector("#avatar-nav");
    avatarNavBar.src = avatar;
};
addAvatarToNavbar();


