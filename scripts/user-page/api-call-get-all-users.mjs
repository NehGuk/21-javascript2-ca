import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";
import { displayAllUsers } from "./display-all-users.mjs";
export async function getAllUsers(url) {
  const [authGet] = authFetchOptionsArray;
  const response = await fetch(url, authGet);
  const userList = response.json();
  console.log(response);
}
