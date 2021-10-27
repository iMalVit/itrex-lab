import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

    constructor() {
        super();
        this.setTitle("Restore Password");
    }

    async getHtml() {
        return `
         <div class="background background_password">
        <main class="content content_password">
            <form class="form form_password" id="form">
                <div class="form__label">
                    <a class="form__back-arrow-link"  href="/sign_up" data-link>
                        <img class="form__back-arrow-link-image" src="../../../static/assets/icons/angle-left-b.svg" alt="arrow" data-link>
                    </a>

                    <label class="form__title form__title_size_restore-password" for="form">
                        Restore Password</label>
                </div>

                <div class="form__description">
                    Please use your email address, and we’ll send you the link to reset your password
                </div>
                <div class="form__input-wrapper form__input-wrapper_email">
                    <input class="form__input" placeholder="Email" type="text" id="emailInput">
                </div>

                <a class="link-button" href="/sign_in" data-link >
                    <button class="link-button__button link-button__button_size_restore-password" data-link>Send Reset Link
                    </button>

                </a>
            </form>
        </main>
    </div>
        `;
    }

    validation() {
        const emailInput = document.querySelector("#emailInput");


        emailInput.oninput = () => {
            if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(emailInput.value)) {
                // document.querySelector('.form__input-wrapper_email .form__message').textContent = '';
                emailInput.style.outline = "none";
                emailInput.classList.add('form__input_valid');
                emailInput.classList.remove('form__input_invalid');
            } else {
                // document.querySelector('.form__input-wrapper_email .form__message').textContent = 'Email is not valid'
                emailInput.style.outline = "none";

                emailInput.classList.add('form__input_invalid');
                emailInput.classList.remove('form__input_valid');
            }

            if(emailInput.value === '') {
                // document.querySelector('.form__input-wrapper_email .form__message').textContent = '';
                emailInput.style.outline = '';
                emailInput.classList.remove('form__input_invalid');
                emailInput.classList.remove('form__input_valid');


            }
        }
    }
}

