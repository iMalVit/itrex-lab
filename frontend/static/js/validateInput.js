export default function (input, regexp, input2) {
    input.oninput = (event) => {
        const inputs = [input, input2]
        if (regexp.test(input.value)) {
            if(document.querySelector(".form__password-description")) {
                document.querySelector(".form__password-description").textContent = "";
            }
            input.style.outline = "none";
            input.classList.add('form__input_valid');
            input.classList.remove('form__input_invalid');

            if(input2) {
                if(input.value === input2.value) {

                    inputs.forEach( e => {
                        e.style.outline = "none";
                        e.classList.add('form__input_compared_valid')
                    })
                }
                else {
                    inputs.forEach( e => {
                        e.classList.remove('form__input_compared_valid')
                    })
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
                inputs.forEach(e => {
                    e.classList.remove('form__input_compared_valid');
                })
            }

            input.style.outline = '';
            input.classList.remove('form__input_invalid');
            input.classList.remove('form__input_valid');

        }

    }
}
