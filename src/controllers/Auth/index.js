const loginButton = documentgetElementById("loginButton");

loginButtonaddEventListener("click", () => {
  logUser();
});

window.addEventListener("load", () => {
  validateAuthenticatedUser();

  //window.location.href = `./index.html`;
});
