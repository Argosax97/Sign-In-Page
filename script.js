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
// SignUp.addEventListener("click", () => {
//     const SignUpPagae = document.createElement("div");
//     SignUpPagae.classList.add("signup_pagae");
//     SignUpPagae.innerHTML = `
//     <div class="sign_container">
//     <div class="signup_title">
//         <h1>Sign in</h1>
//     </div>
//     <div class="forms">
//         <form class="fName">
//             <span>First Name</span>
//             <input type="text" placeholder="Enter your first name">
//         </form>
//         <form class="lName">
//             <span>Email Address</span>
//             <input  type="text" placeholder="Enter your last name">
//         </form>
//         <form class="email_form">
//             <span>Email Address</span>
//             <input id="email" type="email" placeholder="Enter your email">
//         </form>
//         <form class="password_form">
//             <div class="password_text">
//                 <span>Password</span>
//                 <span id="random">Get random password?</span>
//             </div>
//             <input id="password" type="password" placeholder="Enter your password">
//         </form>
//     </div>
//     <button type="submit" class="sign_in"><span>Sign In</span></button>
// </div>`
// document.body.append(SignUpPagae);
// });

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