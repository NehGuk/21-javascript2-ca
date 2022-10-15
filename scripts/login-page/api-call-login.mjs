import { authFetchOptionsArray } from "../api/api-fetch-methods.mjs";
export async function loginUser(url, userData) {
  try {
    const [authGet, authPost, authPut, authDelete, authLogin] =
      authFetchOptionsArray;
    authLogin["body"] = JSON.stringify(userData);

    const response = await fetch(url, authLogin);
    const json = await response.json();

    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);

    const userName = json.name;
    localStorage.setItem("userName", userName);

    const token = json.accessToken;
    localStorage.setItem("accessToken", token);

    const avatar = json.avatar;
    localStorage.setItem("avatar", avatar);

    const loginErrorMessage = document.querySelector("#login-error-message");

    if (json.message === "Invalid email or password") {
      loginErrorMessage.innerHTML = `
                <p>${json.message}</p>
            `;
    } else {
      loginErrorMessage.innerHTML = ``;
      if (avatar.length === 0) {
        const noAvatar = "/assets/image-sample.jpg";
        localStorage.setItem("avatar", noAvatar);
      }
      location.href = `/profile.html?userName=${userName}`;
    }
  } catch (error) {
    console.log(error);
  }
}
