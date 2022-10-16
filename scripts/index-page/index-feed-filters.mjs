import { allPostsURLAsc } from "../api/api-urls.mjs";
import { allPostsURLDesc } from "../api/api-urls.mjs";
import { getPosts } from "../index-page/api-call-get-posts.mjs";

const buttonNewestFirst = document.querySelector("#filter-desc");
const buttonOldestFirst = document.querySelector("#filter-asc");

buttonOldestFirst.addEventListener("click", filterAsc);
/**
 * Filters posts in ascendant order
 * @example
 *
 * ```js
 * // Function getPosts is passed with specifi API URL
 * getPosts(allPostsURLAsc);
 * ```
 */
function filterAsc() {
  buttonOldestFirst.classList.add("active");
  buttonNewestFirst.classList.remove("active");
  getPosts(allPostsURLAsc);
}

buttonNewestFirst.addEventListener("click", filterDesc);
/**
 * Filters posts in descendent order
 * @example
 *
 * ```js
 * // Function getPosts is passed with specifi API URL
 * getPosts(allPostsURLDesc);
 * ```
 */
function filterDesc() {
  buttonNewestFirst.classList.add("active");
  buttonOldestFirst.classList.remove("active");
  getPosts(allPostsURLDesc);
}
