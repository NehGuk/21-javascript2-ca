// BASE URL
export const API_BASE_URL = `https://nf-api.onrender.com`;

// END POINTS
// Register
export const registerURL = `${API_BASE_URL}/api/v1/social/auth/register`;

// Login
export const loginURL = `${API_BASE_URL}/api/v1/social/auth/login`;

// Get profile
export const userProfileURL = `${API_BASE_URL}/api/v1/social/profiles/`; //<user>
export const extraProfileURL = `?_posts=true&_following=true&_followers=true`;


// Get all posts
export const allPostsURL = `${API_BASE_URL}/api/v1/social/posts?_author=true`;
export const allPostsURLDesc = `${allPostsURL}&sort=created&sortOrder=desc`;
export const allPostsURLAsc = `${allPostsURL}&sort=created&sortOrder=asc`;

// Get single post
export const singlePostURL = `${API_BASE_URL}/api/v1/social/posts/`; //<id>
export const extra = `?_author=true&_comments=true&_reactions=true`;

// Create new entry
export const newEntryURL = `${API_BASE_URL}/api/v1/social/posts`;

// Delete entry
export const deleteEntryURL = `${API_BASE_URL}/api/v1/social/posts/`; //<id>

// Update entry
export const updateEntryURL = `${API_BASE_URL}/api/v1/social/posts/`; //<id>
