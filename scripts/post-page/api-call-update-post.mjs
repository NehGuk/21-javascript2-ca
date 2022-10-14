
import { getPost, postURL } from "./api-call-get-post.mjs";

import { URLToBeUpdated } from "./post-update.mjs";
import { postContainer } from "./post-update.mjs";

import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";
const [authGet, authPost, authPut] = authFetchOptionsArray;

import { buttonContainer } from "./post-update.mjs";
import { postID } from "./post-update.mjs";
export async function updateEntry(url) {
    try {
        // Get data from current post
        function fetchCurrentPost() {
            console.log("Getting post data");
            getPost(URLToBeUpdated);
        }
    
        const response = await fetch(URLToBeUpdated, authGet);
        const post = await response.json();
        console.log("Rooockingggg222!");
        console.log(response);
        console.log(post);
        console.log(post.title);

        // Create form and populate it with post info
        postContainer.innerHTML = `
        <div class="container px-4 py-5 col-lg-5 col-sm-12">
        <h1 class="text-center pb-3">Edit post</h1>
    
        <form id="update-post-form">
          <!-- title -->
          <div class="">
          <input type="text" name="title" id="title" class="form-control" value="${post.title}" maxlength="300" title="Please add a title to your post" required>
          <label for="title"></label>
          </div>
    
          <!-- content -->
          <div class="">
          <textarea type="text" name="body" id="body" class="form-control" maxlength="1000000" rows="5" required>${post.body}</textarea>
          <label for="body"></label>
          </div>
    
          <!-- image url -->
          <div class="mb-4"> <!-- before: form-floating -->
            <input type="text" name="media" id="media" class="form-control" value="${post.media}" maxlength="1000" title="Instructions about the image format">
            <label for="name"></label>
            </div>
          
          <!-- update -->
          <button class="w-100 btn btn-lg btn-primary" type="submit">Update</button>
          <br>
          <br>
        </form>
        </div>
        `;

        // Add event listener to the update button
        const updateForm = document.querySelector("#update-post-form");
        
        updateForm.addEventListener("submit", updatePostInfo);
        
        function updatePostInfo(event) {
            event.preventDefault();

            // Create new object from form inputs
            const myFormData = new FormData(event.target);
            const updatedPostContent = Object.fromEntries(myFormData.entries());
            console.log(updatedPostContent);

            // API call to update post
            async function sendEditedEntry(url, updatedContent) {
                //console.log(url);
                //console.log(updatedPostContent);

                authPut["body"] = JSON.stringify(updatedContent),
                console.log(authPut);
                
                const response2 = await fetch(url, authPut);
                const editedPost = await response2.json();

                // Reload updated post? How?
                location.reload();

            }
            sendEditedEntry(URLToBeUpdated, updatedPostContent);
        }    
    } catch(error) {
        console.log(error);
    }
};