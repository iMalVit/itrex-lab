const button = document.querySelector(".link-button")
const input = document.querySelector(".form__input-wrapper")
const description = document.querySelector(".form__description")

function resetPassword(event) {
event.preventDefault();
input.remove();
button.remove();
description.textContent = `An email has been sent to example@exam.com. Check your inbox, and click the reset link provided.`
}

button.addEventListener("click", resetPassword);
