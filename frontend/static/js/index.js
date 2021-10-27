import SignUp from "./views/SignUp.js";
import SignIn from "./views/SignIn.js";
import RestorePassword from "./views/RestorePassword.js";
import RestorePasswordSuccess from "./views/RestorePasswordSuccess.js";


const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};


const router = async () => {
    const routes = [
        {path: "/", view: SignUp},
        {path: "/sign_in", view: SignIn},
        {path: "/restore_password", view: RestorePassword},
        {path: "/restore_password_success", view: RestorePasswordSuccess},
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

    document.querySelector("#root").innerHTML = await view.getHtml();

    view.validation();

    // console.log(match.route.view());
};

window.addEventListener("popstate", router);


document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        // console.log(e.target)
        if (e.target.matches("[data-link]") && (e.target.tagName === 'A'))  {
            e.preventDefault();
            navigateTo(e.target.href);
        }

        else if (e.target.matches("[data-link]") && (e.target.tagName === 'IMG')) {
            e.preventDefault();
            navigateTo('/sign_in');
        } else if (e.target.matches("[data-link]") && (e.target.tagName === 'BUTTON')) {
            e.preventDefault()
            navigateTo('restore_password_success');
        }
    })
    router();
});
