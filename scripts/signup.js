
// BASE URL
const API_BASE_URL = "https://nf-api.onrender.com";

// END POINT register: /api/v1/social/auth/register
const registerURL = `${API_BASE_URL}/api/v1/social/auth/register` 

// Get user data from the form

// Form fields
/* const form = document.querySelector("#signupform");
console.log(form);

function testFunc(event) {
    event.preventDefault();
    console.log("Form works");
}
testFunc();

form.addEventListener("submit", testFunc);
 */

// after clicking the register button, create a user variable

const userToRegister = {
    name: "Perrrrrr",
    email: "perrrrrgyntttt@noroff.no",
    password: "123456788899",
};

// Register user function
async function registerUser(url, userData) {
    console.log(userData);
    console.log(url);

    try {
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };

        const response = await fetch(url, postData);
        const json = await response.json();

        console.log(json);


    } catch(error) {
        console.log(error);
    }   
}

//registerUser(registerURL, userToRegister);



/* const emailFromNoroff1 = "@noroff.no"
const emailFromNoroff2 = "@stud.noroff.no"

const emailFromNoroff1 = "Oh hello there";

const expression = emailFromNoroff1 || emailFromNoroff2;

const result = expression.test(stringToTest);

console.log(result);
 */


// From JavScript 1 Lesson 4.4

// const stringToTest = "Oh hello there";

// the expression is placed between / /

// const expression = /hello/;

// const result = expression.test(stringToTest);

// console.log(result);

// true
console.log("Workingggg");

const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(lastName.value, 3) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    // if (firstName.value.trim().length > 0) {
    //     firstNameError.style.display = "none";
    // } else {
    //     firstNameError.style.display = "block";
    // }

    // if (lastName.value.trim().length > 3) {
    //     lastNameError.style.display = "none";
    // } else {
    //     lastNameError.style.display = "block";
    // }

    console.log("hello");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}