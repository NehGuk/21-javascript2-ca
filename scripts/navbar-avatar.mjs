function addAvatarToNavbar() {
    const avatar = localStorage.getItem("avatar");
    const avatarNavBar = document.querySelector("#avatar-nav");
    avatarNavBar.src = avatar;
};
addAvatarToNavbar();
