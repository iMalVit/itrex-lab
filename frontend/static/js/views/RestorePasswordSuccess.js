import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

    constructor() {
        super();
        this.setTitle("Restore Password Success");
    }

    async getHtml() {
        return `
         <div class="background background_password">
        <main class="content content_password">
            <form class="form form_password" id="form">
                <div class="form__label">
                    <a class="form__back-arrow-link" href="/sign_in" data-link>
                        <img class="form__back-arrow-link-image" src="../../../static/assets/icons/angle-left-b.svg" alt="arrow" data-link>
                    </a>

                    <label class="form__title form__title_size_restore-password" for="form">
                        Restore Password</label>
                </div>

                <div class="form__description">
                    An email has been sent to example@exam.com. Check your inbox, and click the reset link provided.
                </div>
          
            </form>
        </main>
    </div>
        `;
    }

    validation() {

    }
}

