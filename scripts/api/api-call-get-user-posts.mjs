// add date format

export async function getUserPosts(url) {
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

        const response = await fetch(url, fetchingOptions);
        const userProfile = await response.json();
        console.log(response);
        console.log(userProfile.posts);
        
        async function displayUserPosts() {

            const myPostsContainer = document.querySelector("#my-posts-container");
            
            myPostsContainer.innerHTML = "";    
            
            for (let i = 0; i < userProfile.posts.length; i++) {
            
                // if statement here for default image?
                if (!userProfile.posts[i].media) {
                    userProfile.posts[i].media = "/assets/image-sample.jpg";
                };

                // Formatting the dates
                const formattedDate = new Date(userProfile.posts[i].created).toLocaleString();
        
                // Populate myPostsContainer
                myPostsContainer.innerHTML += `
                
                <div class="col">
                <div class="card h-100">
                <a href="/post.html?id=${userProfile.posts[i].id}"><img src="${userProfile.posts[i].media}" class="card-img-top" alt="..."></a>
                <div class="card-body">
                <a href="/post.html?id=${userProfile.posts[i].id}" style="text-decoration: none"><h5 class="card-title">${userProfile.posts[i].title}</h5></a>
                    <p class="card-text">${userProfile.posts[i].body}</p>
                </div>
                <div class="card-footer">
                    <img src="/assets/image-sample.jpg" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                    <small class="text-muted"><strong>${userProfile.posts[i].owner}</strong>&emsp;</small>
                    <small class="text-muted">${formattedDate}</small>
                </div>
                
                </div>
                </div>
                `;
                    
                
                
                
            
            


            }

            
        }
        displayUserPosts();
    } catch(error) {
        console.log(error);
    }
}

//getUserProfile();