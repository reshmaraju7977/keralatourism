const message = document.getElementById("message");
const nameEl = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitButton = document.getElementById("submitButton");
const tester = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!nameEl.value) {
    message.innerText = "please enter your full name";
    message.style.display = "block";
    return false;
  }

  if (!tester.test(email.value)) {
    message.innerText = "please enter a valid email";
    message.style.display = "block";
    return false;
  }

  if (password.value.length < 8) {
    message.innerText = "password length must be greater than 8";
    message.style.display = "block";
    return false;
  }
  alert("Success!");
    window.location.reload();
});