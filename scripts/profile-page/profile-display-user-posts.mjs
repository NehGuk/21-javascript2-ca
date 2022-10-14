export function displayUserPosts(userPosts) {
    const avatar = localStorage.getItem("avatar");

    const myPostsContainer = document.querySelector("#my-posts-container");
    myPostsContainer.innerHTML = "";    
    
    for (let i = 0; i < userPosts.length; i++) {
    
        // if statement here for default image?
        if (!userPosts[i].media) {
            userPosts[i].media = "/assets/image-sample.jpg";
        };

        // Formatting the dates
        const formattedDate = new Date(userPosts[i].created).toLocaleDateString('en-us', {month:"short", day:"numeric"});
        const formattedTime = new Date(userPosts[i].created).toLocaleTimeString('en-GB');

        // Populate myPostsContainer
        myPostsContainer.innerHTML += `
        
        <div class="col">
        <div class="card h-100">
        <a href="/post.html?id=${userPosts[i].id}"><img src="${userPosts[i].media}" class="card-img-top" alt="Image cover: ${userPosts[i].title}" style="width: 100%; height: 15rem; object-fit: cover"></a>
        <div class="card-body">
        <a href="/post.html?id=${userPosts[i].id}" style="text-decoration: none"><h5 class="card-title">${userPosts[i].title}</h5></a>
            <p class="card-text">${userPosts[i].body.slice(0, 400)}<a href="/post.html?id=${userPosts[i].id}" style="text-decoration: none">...</a></p>
        </div>
        <div class="card-footer">
            <img src="${avatar}" width="32" height="32" class="rounded-circle border border-white" alt="${userPosts[i].owner} avatar">
            <small class="text-muted"><strong>${userPosts[i].owner}</strong>&emsp;</small>
            <small class="text-muted" style="font-size: .8em">${formattedDate}, ${formattedTime}</small>
        </div>
        
        </div>
        </div>
        `;
            
    }
    
}