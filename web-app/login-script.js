import { Utils } from "./Utils.js";
document.addEventListener("DOMContentLoaded", (event) => {
  Utils.loadCredientialsToLocalStorage();
});

const form = document.getElementById("form");
form.addEventListener("submit", loginEventHandler);

const err = document.querySelector(".invalid");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");

usernameInput.addEventListener("focus", onFocusEventHandler);
passwordInput.addEventListener("focus", onFocusEventHandler);

function loginEventHandler(event) {
  event.preventDefault();
  let username = usernameInput.value.trim();
  let password = passwordInput.value.trim();

  if (username == "" || password == "") {
    alert("Please fill the username and password details.");
    return;
  }

  if (Utils.checkCredientials(username, password)) {
    window.location.href = "/html&css/resume.html";
    history.pushState(null, null, "/html&css/resume.html");
  } else {
    err.classList.remove("hidden");
  }
}

function onFocusEventHandler() {
  if (!err.classList.contains("hidden")) {
    err.classList.add("hidden");
  }
}
