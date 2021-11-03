import AbstractView from "./AbstractView.js";
import validateInput from "../utils/validateInput.js";
import toogleVisibility from "../utils/toogleVisibility.js";
import regexp from "../utils/regexp.js"

export default class extends AbstractView {

    constructor() {
        super();
        this.setTitle("Sign up");
    }

    async getHtml() {
        return `
        <div class="background">
        <main class="content">
            <form class="form" id="form">
                <label class="form__title" for="form">Sign Up</label>
                <div class="form__input-wrapper form__input-wrapper_first-name">
                    <input class="form__input" placeholder="First Name" type="text" id="firstNameInput">

                </div>
                <div class="form__input-wrapper form__input-wrapper_last-name">
                    <input class="form__input" placeholder="Last Name" type="text" id="lastNameInput">

                </div>
                <div class="form__input-wrapper form__input-wrapper_email" >
                    <input class="form__input" placeholder="Email" type="text" id="emailInput">

                </div>
                <div class="form__input-wrapper form__input-wrapper_password">
                    <input class="form__input" placeholder="Password" type="password" id="passwordInput">
                    <span class="form__show-password-icon" id="passwordShowIcon"></span>
                    <div class="form__password-description" id="inputDescription"></div>



                </div>
                <div class="form__input-wrapper form__input-wrapper_confirm-password">
                    <input class="form__input" placeholder="Confirm Password" type="password" id="confirmPasswordInput">
                    <span class="form__show-password-icon" id="confirmPasswordShowIcon"></span>


                </div>
                <a class="link-button" href="" data-link>
                    <button class="link-button__button">Sign Up</button>

                </a>
            </form>

            <div class="question-link">
                <div class="question-link__text">Already have an account?</div>
                <a class="question-link__link" href="/sign_in" data-link>Sign in</a>
            </div>
        </main>
    </div> 
        `;
    }


    validation() {

        const emailInput = document.getElementById("emailInput");
        const passwordInput = document.getElementById("passwordInput");
        const firstNameInput = document.getElementById("firstNameInput");
        const lastNameInput = document.getElementById("lastNameInput");
        const confirmPasswordInput = document.getElementById("confirmPasswordInput");

        validateInput(firstNameInput, regexp.nameInput);
        validateInput(lastNameInput, regexp.nameInput);
        validateInput(emailInput, regexp.emailInput);
        validateInput(passwordInput, regexp.passwordInput, confirmPasswordInput);
        validateInput(confirmPasswordInput, regexp.passwordInput, passwordInput);

        document.getElementById("passwordShowIcon").addEventListener('click', toogleVisibility.bind(event, passwordInput));
        document.getElementById("confirmPasswordShowIcon").addEventListener('click', toogleVisibility.bind(event, confirmPasswordInput));

    }
}

