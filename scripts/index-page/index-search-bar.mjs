import { displayAllPosts } from "../index-page/index-display-all-posts.mjs";

const searchInput = document.querySelector("#search-input");
const clearButton = document.querySelector("#clear-button");
const errorMessageContainer = document.querySelector(
  "#error-message-container"
);

searchInput.addEventListener("input", (event) => {
  let value = event.target.value;
  let filteredArray = [];

  for (let i = 0; i < window.posts.length; i++) {
    let currentPost = window.posts[i];

    if (
      currentPost.title.toLowerCase().includes(value.toLowerCase()) ||
      currentPost.body.toLowerCase().includes(value.toLowerCase()) ||
      currentPost.author.name.toLowerCase().includes(value.toLowerCase())
    ) {
      filteredArray.push(currentPost);
      errorMessageContainer.innerHTML = ``;
    } else if (filteredArray.length === 0) {
      errorMessageContainer.innerHTML = `
        <p class="text-center text-secondary">Oooops! No posts match the search terms.</p>
        `;
    }
  }
  displayAllPosts(filteredArray);
});

clearButton.addEventListener("click", clearSearchField);
function clearSearchField() {
  searchInput.value = "";
  displayAllPosts(window.posts);
  errorMessageContainer.innerHTML = ``;
}
