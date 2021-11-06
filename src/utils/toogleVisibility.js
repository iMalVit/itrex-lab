export const toogleVisibility = (inputId, event) => {
  if (document.getElementById(inputId).type === "text") {
    event.target.classList.remove("form__show-password-icon_show");
    document.getElementById(inputId).type = "password";
  } else {
    event.target.classList.add("form__show-password-icon_show");
    document.getElementById(inputId).type = "text";
  }
};
