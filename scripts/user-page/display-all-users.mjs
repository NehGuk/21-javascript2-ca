export function displayAllUsers(userArray) {
  const table = document.querySelector("#user-list");
  table.innerHTML = ``;

  for (let i = 0; i < userArray.length; i++) {
    table.innerHTML += `
        <tr>
            <td><img src="/assets/image-sample.jpg" width="32" height="32" class="rounded-circle border border-white" alt="User avatar">  <strong>${userArray[i].name}</strong></td>
            <td class="text-end"><button class="btn btn-primary" id="button-follow">Follow</button><button class="btn btn-secondary" id="button-unfollow" style="display: none">Unfollow</button></td>
        </tr>
    `;
  }
}
