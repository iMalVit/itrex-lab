
export default  function (input, event) {

    if (input.type === 'password') {
        input.type = 'text';
        event.target.classList.add("form__show-password-icon_show")


    } else {
        input.type = 'password';
        event.target.classList.remove("form__show-password-icon_show")
    }
}
