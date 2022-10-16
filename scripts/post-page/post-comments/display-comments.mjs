export function displayComments() {
  const postCommentsArray = post.comments;
  const userCommentsContainer = document.querySelector("#user-comments-area");
  userCommentsContainer.innerHTML = ``;
  for (let i = 0; i < postCommentsArray.length; i++) {
    const formattedDate = new Date(
      postCommentsArray[i].created
    ).toLocaleDateString("en-us", { month: "short", day: "numeric" });
    const formattedTime = new Date(
      postCommentsArray[i].created
    ).toLocaleTimeString("en-GB");

    userCommentsContainer.innerHTML += `
    <div class="container">
    <div class="row">
      <div class="col-1">
        <a href="#"><img src="/assets/image-sample.jpg" width="32" height="32" class="rounded-circle border border-primary" style="width: 32; height: 32; object-fit: cover; border-width: 1px !important;" alt="User avatar"></a>
      </div>
      <div class="col">
        <p><strong>${postCommentsArray[i].owner} |</strong> ${formattedDate}, ${formattedTime} <br> ${postCommentsArray[i].body}</p>
      </div>  
    </div>
    <hr>  
    </div>    
    `;
  }
}
