const message = document.getElementById("message");
const nameEl = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitButton = document.getElementById("submitButton");
const tester = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (!nameEl.value) {
        message.innerText = "Please enter your user name";
        message.style.display = "block";
        return false;
    }

    if (!tester.test(email.value)) {
        message.innerText = "Please enter a valid email";
        message.style.display = "block";
        return false;
    }

    if (password.value.length < 8 || password.value !== confirmPassword.value) {
        message.innerText = "Passwords must be at least 8 characters long and match";
        message.style.display = "block";
        return false;
    }

    // Your additional logic goes here if needed

    alert("Success!");
    window.location.reload();
});
