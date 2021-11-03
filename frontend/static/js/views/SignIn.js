import AbstractView from "./AbstractView.js";
import validateInput from "../utils/validateInput.js";
import toogleVisibility from "../utils/toogleVisibility.js";
import regexp from "../utils/regexp.js";

export default class extends AbstractView {

    constructor() {
        super();
        this.setTitle("Sign In");
    }


    async getHtml() {




        return `
        <div class="background background_sign-in">
        <main class="content content_sign-in">
            <form class="form form_padding" id="form">
                <label class="form__title" for="form">Sign In</label>
                <div class="form__input-wrapper form__input-wrapper_email">
                    <input class="form__input" placeholder="Email" type="text" id="emailInput" maxlength="30">
                </div>
                <div class="form__input-wrapper form__input-wrapper_password">
                    <input class="form__input" placeholder="Password" type="password" id="passwordInput" maxlength="30">
                    <span class="form__show-password-icon" id="passwordShowIcon"></span>
                    <div class="form__password-description" id="inputDescription"></div>
                </div>
                <a class="link-button" href="/patients" data-link>
                    <button class="link-button__button link-button__button_size" data-link>Sign In</button>

                </a>

                <div class="question-link question-link_sign-in-position">
                    <a class="question-link__link" href="/restore_password" data-link>Forgot Password?</a>
                </div>
            </form>

            <div class="question-link question-link_size">
                <div class="question-link__text">Don't have an account?</div>
                <a class="question-link__link" href="/sign_up" data-link>Sign up</a>
            </div>
        </main>
    </div>  
        `;
    }


    validation() {
        const emailInput = document.getElementById("emailInput");
        const passwordInput = document.getElementById("passwordInput");

        validateInput(emailInput, regexp.emailInput);
        validateInput(passwordInput, regexp.passwordInput);

        document.getElementById("passwordShowIcon").addEventListener('click', toogleVisibility.bind(event, passwordInput));
    }




}

