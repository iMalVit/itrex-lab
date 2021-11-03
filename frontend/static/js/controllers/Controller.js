import SignUp from "../views/SignUp.js";
import SignIn from "../views/SignIn.js";
import RestorePassword from "../views/RestorePassword.js";
import RestorePasswordSuccess from "../views/RestorePasswordSuccess.js";
import Patients from "../views/Patients.js";
import Model from "../models/Model.js";

export default class Controller {
    constructor() {

        window.addEventListener("popstate", this.router);


        document.addEventListener("DOMContentLoaded", () => {
            document.body.addEventListener("click", e => {

                if (e.target.matches("[data-link]") && (e.target.tagName === 'A'))  {
                    e.preventDefault();
                    this.navigateTo(e.target.href);
                }

                else if (e.target.matches("[data-link]") && (e.target.tagName === 'IMG')) {
                    e.preventDefault();
                    this.navigateTo('/sign_in');
                } else if (e.target.matches("[data-link]") && (e.target.tagName === 'BUTTON') && (e.target.classList.contains("link-button__button_size_restore-password")) ) {
                    e.preventDefault()
                    this.navigateTo('/restore_password_success');
                } else if (e.target.matches("[data-link]") && (e.target.tagName === 'BUTTON') && (e.target.parentNode.getAttribute('href') === '/patients' )) {
                    e.preventDefault()
                    this.navigateTo('/patients');
                }
            })
            this.router();
        });

    }


    navigateTo(url) {
        history.pushState(null, null, url);
        this.router();
    };


    async router() {
        const routes = [
            {path: "/", view: SignUp},
            {path: "/sign_in", view: SignIn},
            {path: "/restore_password", view: RestorePassword},
            {path: "/restore_password_success", view: RestorePasswordSuccess},
            {path: "/patients", view: Patients},
        ];


        const potentialMatches = routes.map(route => {
            return {
                route: route,
                isMatch: location.pathname === route.path,
            };
        });

        let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

        if(!match) {
            match = {
                route: routes[0],
                isMatch: true
            }
        }


        const view = new match.route.view();
        if(match.route.path === '/patients') {
            const model = new Model();
            document.querySelector("#root").innerHTML = await view.getHtml(model.listOfPatients);

        }
        else {
            document.querySelector("#root").innerHTML = await view.getHtml();

        }

        view.validation();

    };

}
