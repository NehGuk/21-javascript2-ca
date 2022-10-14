export function displayPost() {
    const postContainer = document.querySelector(".container");
    if (!post.media) {
        post.media = "/assets/image-sample.jpg";
    };
    if (!post.author.avatar) {
        post.author.avatar = "/assets/image-sample.jpg";
    };

    // Formatting the dates
    //const formattedDate = new Date(post.created).toGMTString();
    const formattedDate = new Date(post.created).toLocaleDateString('en-us', {month:"short", day:"numeric"});
    const formattedTime = new Date(post.created).toLocaleTimeString('en-GB');

    postContainer.innerHTML = "";
    postContainer.innerHTML = `
    <div class="row row-cols-1 row-cols-md-1 g-4 posts-container">
        <div class="col">
        <div class="card h-100">
            <img src="${post.media}" class="card-img-top" style="max-height: 30em; object-fit: cover" alt="Image cover: ${post.title}">
            <div class="card-body">
            <h1 class="card-title">${post.title}</h1>
            <p class="card-text">${post.body}</p>
            </div>
            <div class="card-footer">
                <img src="${post.author.avatar}" width="32" height="32" class="rounded-circle border border-white" alt="${post.author.name} avatar">
                <small class="text-muted"><strong>${post.author.name}</strong>&emsp;</small>
                <small class="text-muted" style="font-size: 0.8em">${formattedDate}, ${formattedTime}</small>
            </div>
            <div class="card-footer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
            <small class="text-muted">${post._count.reactions} &emsp;</small>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square-text" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <small class="text-muted">${post._count.comments}</small>  
            </div>
        </div>
        </div>
    </div>
    `;
    
};