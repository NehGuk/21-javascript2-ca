export function displayUserPosts(userPosts) {
  const userPostsContainer = document.querySelector("#user-posts-container");
  userPostsContainer.innerHTML = ``;

  for (let i = 0; i < userPosts.length; i++) {

    if (!userPosts[i].media) {
        userPosts[i].media = "/assets/image-sample.jpg";
    }

    const formattedDate = new Date(userPosts[i].created).toLocaleDateString("en-us", { month: "short", day: "numeric" });
    const formattedTime = new Date(userPosts[i].created).toLocaleTimeString("en-GB");
    
    userPostsContainer.innerHTML += `
    <div class="col">
        <div class="card h-100">
        <a href="/post.html?id=${userPosts[i].id}"><img src="${userPosts[i].media}" class="card-img-top" alt="Image cover: ${userPosts[i].title}" style="width: 100%; height: 15rem; object-fit: cover"></a>
        <div class="card-body">
        <a href="/post.html?id=${userPosts[i].id}" style="text-decoration: none"><h5 class="card-title">${userPosts[i].title}</h5></a>
            <p class="card-text">${userPosts[i].body.slice(0, 400)}<a href="/post.html?id=${userPosts[i].id}" style="text-decoration: none">...</a></p>
        </div>
        <div class="card-footer">
            <a href="#"><img src="/assets/image-sample.jpg" width="32" height="32" class="rounded-circle border border-primary" style="width: 32; height: 32; object-fit: cover; border-width: 1px !important;" alt="${userPosts[i].owner} avatar"></a>
            <small class="text-muted"><a href="#" style="text-decoration: none; color: black"><strong>${userPosts[i].owner}</strong></a>&emsp;</small>
            <small class="text-muted" style="font-size: .8em">${formattedDate}, ${formattedTime}</small>
        </div>
        
        </div>
        </div>    
    `;
  }
}
