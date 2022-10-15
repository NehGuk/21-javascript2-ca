import { getAllUsers } from "./api-call-get-all-users.mjs";
import { allUsersURL } from "../api/api-urls.mjs";
import { displayAllUsers } from "./display-all-users.mjs";

getAllUsers(allUsersURL);
displayAllUsers();
