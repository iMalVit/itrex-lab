export default function (input, regex, input2 = undefined) {
    input.oninput = (event) => {
        console.log(event.target.value)
        if (regex.test(input.value)) {
            if(document.querySelector(".form__password-description")) {
                document.querySelector(".form__password-description").textContent = ""
            }
            input.style.outline = "none";
            input.classList.add('form__input_valid');
            input.classList.remove('form__input_invalid');

            if(input2) {
                console.log(input.value === input2.value)
                if(input.value === input2.value) {
                    input.style.outline = "none";
                    input.classList.add('form__input_compared_valid');
                    input2.style.outline = "none";
                    input2.classList.add('form__input_compared_valid');
                }
                else {
                    // input.style.outline = '';
                    // input2.style.outline = '';
                    input.classList.remove('form__input_compared_valid');
                    input2.classList.remove('form__input_compared_valid');
                }
            }

        } else {
            if(document.querySelector(".form__password-description") && input.id === 'passwordInput') {
                document.querySelector(".form__password-description").textContent = "Password must contain a capital letter, a number and be at least 8 characters"
            }
            input.style.outline = "none";

            input.classList.add('form__input_invalid');
            input.classList.remove('form__input_valid');
        }

        if (input.value === '') {
            if(input2) {
                input.classList.remove('form__input_compared_valid');
                input2.classList.remove('form__input_compared_valid');
            }
            input.style.outline = '';
            input.classList.remove('form__input_invalid');
            input.classList.remove('form__input_valid');


        }

    }
}
