const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
  console.log(loginInput);
  console.log(loginInput);
}

loginForm.addEventListener("submit", onLoginSubmit);
