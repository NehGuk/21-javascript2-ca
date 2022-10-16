import { singleUserURL } from "../api/api-urls.mjs";
import { singleUserURLextra } from "../api/api-urls.mjs";
import { getUser } from "./api-call-get-user.mjs";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userToLoad = urlParams.get("user");
const userSpecificURL = `${singleUserURL}${userToLoad}${singleUserURLextra}`;

getUser(userSpecificURL);
