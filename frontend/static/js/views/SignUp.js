import AbstractView from "./AbstractView.js";
import validateInput from "../../../static/js/validateInput.js";
import toogleVisibility from "../toogleVisibility.js";
import Regexp from "../Regexp.js"

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
                    <span class="form__show-password-icon"></span>
                    <div class="form__password-description"></div>



                </div>
                <div class="form__input-wrapper form__input-wrapper_confirm-password">
                    <input class="form__input" placeholder="Confirm Password" type="password" id="confirmPasswordInput">
                    <span class="form__show-password-icon"></span>


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

        const emailInput = document.querySelector("#emailInput");
        const passwordInput = document.querySelector("#passwordInput");
        const firstNameInput = document.querySelector("#firstNameInput");
        const lastNameInput = document.querySelector("#lastNameInput");
        const confirmPasswordInput = document.querySelector("#confirmPasswordInput");

        validateInput(firstNameInput, Regexp.nameInput);
        validateInput(lastNameInput, Regexp.nameInput);
        validateInput(emailInput, Regexp.emailInput);
        validateInput(passwordInput, Regexp.passwordInput, confirmPasswordInput);
        validateInput(confirmPasswordInput, Regexp.passwordInput, passwordInput);

        document.querySelector(".form__input-wrapper_password span").addEventListener('click', toogleVisibility.bind(event, passwordInput));
        document.querySelector(".form__input-wrapper_confirm-password span").addEventListener('click', toogleVisibility.bind(event, confirmPasswordInput));

    }
}

