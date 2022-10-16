import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";
export async function registerUser(url, userData) {
  try {
    const [authGet, authPost] = authFetchOptionsArray;
    authPost["body"] = JSON.stringify(userData);
    const response = await fetch(url, authPost);
    const json = await response.json();

    const userName = json.name;
    localStorage.setItem("userName", userName);

    location.href = "/signup-thank-you.html";
  } catch (error) {
    console.log(error);
  }
}
