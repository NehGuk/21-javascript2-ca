import { singlePostURL } from "../api/api-urls.mjs";
import { extra } from "../api/api-urls.mjs";
import { displayPost } from "./post-display-post.mjs";
import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const postID = urlParams.get("id");

export const postURL = `${singlePostURL}${postID}${extra}`;
export const postURLToUpdate = `${singlePostURL}${postID}`;

export async function getPost(url) {
  try {
    const userName = localStorage.getItem("userName");
    const [authGet] = authFetchOptionsArray;

    const response = await fetch(postURL, authGet);
    const post = await response.json();
    window.post = post;
    displayPost();

    console.log(post.author.name);
    console.log(userName);
    const buttonContainer = document.querySelector("#button-container");
    if (post.author.name === userName) {
      buttonContainer.style.display = "block";
    } else {
    }
  } catch (error) {
    console.log(error);
  }
}
