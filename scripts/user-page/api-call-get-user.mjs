import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";
import { displayUser } from "./display-user.mjs";
import { displayUserPosts } from "./display-user-posts.mjs";

export async function getUser(url) {
  const [authGet] = authFetchOptionsArray;
  const response = await fetch(url, authGet);
  const userInfo = await response.json();

  displayUser(userInfo);
  const { posts: userPostsArray } = userInfo;
  displayUserPosts(userPostsArray);
}
