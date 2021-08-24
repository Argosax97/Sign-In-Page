const Email = document.querySelector("#email");
const Password = document.querySelector("#password");

const SignIn = document.querySelector(".sign_in");

SignIn.addEventListener("click", () => {
    if (Email.value == '' && Password.value == '') {
        Email.style.border = "1px solid red";
        Password.style.border = "1px solid red";
        alert("Please fill these fealds!");
    }
    else if (Email.value == '') {
        Email.style.border = "1px solid red";
        alert("Please fill this feald!");
    }
    else if (Password.value == '') {
        Password.style.border = "1px solid red";
        alert("Please fill this feald!");
    }

    else {
        Email.style.border = "none";
        Password.style.border = "none";
        alert("Welcome!")
    }
})

const SignUp = document.querySelector(".sign_up");
SignUp.addEventListener("click", () => {
    const signup_pagae = document.querySelector(".signup_pagae")
    signup_pagae.style.display = "flex"
})

const RandPasBtn = document.querySelector(".random");
RandPasBtn.addEventListener("click", () => {
    const passwordField = document.querySelector("#signup_password");
    passwordField.value = GetRandomPass();
})


function GetRandomPass() {
    const lowLetters = "abcdefghijklmnopqrstuvwxyz";
    const upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const simbols = "!@#$%^&*";
    let password = "";

    for (let i = 0; i < 5; i++) {
        let passArray = [];
        passArray.push(lowLetters[Math.floor(Math.random() * 26)]);
        passArray.push(upLetters[Math.floor(Math.random() * 26)]);
        passArray.push(numbers[Math.floor(Math.random() * 10)]);
        passArray.push(simbols[Math.floor(Math.random() * 8)]);
        
        password += passArray.join('');
    }
    return password;
}

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#signup_password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});