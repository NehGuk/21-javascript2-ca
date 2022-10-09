


// Delete post
const buttonContainer = document.querySelector("#button-container");
const deleteButton = document.querySelector("#delete-button");
const updateButton = document.querySelector("#update-button");
buttonContainer.style.display = "none";

deleteButton.addEventListener("click", deleteEntry);
function deleteEntry() {
    console.log("Eita");
    

    // Directing user to another page after deletion
    //location.href = "/index.html";
};