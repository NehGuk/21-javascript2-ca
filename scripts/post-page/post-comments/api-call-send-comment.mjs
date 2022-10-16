import { authFetchOptionsArray } from "../../api/api-fetch-methods.mjs";
export async function sendNewComment(url, commentObject) {
  const [authGet, authPost] = authFetchOptionsArray;
  authPost["body"] = JSON.stringify(commentObject);
  const response = await fetch(url, authPost);
  const comment = response.json();
  location.reload();
}
