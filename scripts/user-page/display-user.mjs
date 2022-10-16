export function displayUser(userInfo) {
  const profileMainContainer = document.querySelector(
    "#profile-main-container"
  );

  if (!userInfo.avatar) {
    userInfo.avatar = "/assets/image-sample.jpg";
  }

  profileMainContainer.innerHTML = ``;
  profileMainContainer.innerHTML += `
  <h1 class="text-center">Profile</h1>
        <!-- profile avatar -->
        <div class="text-center m-5">
        <img src="${userInfo.avatar}" class="rounded-circle border border-primary" style="width: 200px; height: 200px; object-fit: cover; border-width: 4px !important;"  alt="${userInfo.name} avatar">
        </div>
        
        <!-- profile info -->
        <p class="text-center"><b>Name: </b>${userInfo.name}</p>
        <p class="text-center"><b>Email: </b>${userInfo.email}</p>  
        <hr>  
  `;
}
