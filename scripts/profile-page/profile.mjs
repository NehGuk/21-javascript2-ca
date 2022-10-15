import { userProfileURL } from "../api/api-urls.mjs";
import { extraProfileURL } from "../api/api-urls.mjs";

const userName = localStorage.getItem("userName");
const userURLToLoad = `${userProfileURL}${userName}${extraProfileURL}`;

import { getUserProfile } from "../profile-page/api-call-get-user-profile.mjs";
getUserProfile(userURLToLoad);

import { getUserPosts } from "../profile-page/api-call-get-user-posts.mjs";
getUserPosts(userURLToLoad);
