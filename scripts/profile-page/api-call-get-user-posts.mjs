import { displayUserPosts } from "../profile-page/profile-display-user-posts.mjs";
import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";
export async function getUserPosts(url) {
  try {
    const [getPosts] = authFetchOptionsArray;
    const response = await fetch(url, getPosts);
    const userProfile = await response.json();
    const userPosts = userProfile.posts;
    window.userPosts = userPosts;
    displayUserPosts(userPosts);
  } catch (error) {
    console.log(error);
  }
}
