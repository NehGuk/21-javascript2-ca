import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";
export async function sendAvatar(url, avatarMediaObject) {
  try {
    const [authGet, authPost, authPut] = authFetchOptionsArray;
    authPut["body"] = JSON.stringify(avatarMediaObject);
    const response = await fetch(url, authPut);
    const json = await response.json();
    console.log(response);
    console.log(json);
    location.reload();
  } catch (error) {
    console.log(error);
  }
}
