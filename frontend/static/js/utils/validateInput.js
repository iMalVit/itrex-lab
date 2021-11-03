export default function (input, regexp, connectedInput) {



    const isPasswordInput = input.id === 'passwordInput' || input.id === 'confirmPasswordInput';



    input.oninput = (event) => {

        const inputs = [input, connectedInput]

        if (regexp.test(input.value)) {
            if(isPasswordInput) {
                document.getElementById("inputDescription").textContent = "";
            }
            input.style.outline = "none";
            input.classList.add('form__input_valid');
            input.classList.remove('form__input_invalid');

            if(connectedInput) {
                const comparePasswordsInputs = input.value === connectedInput.value;

                if(comparePasswordsInputs) {

                    inputs.forEach( e => {
                        e.style.outline = "none";
                        e.classList.remove('form__input_valid')
                        e.classList.remove('form__input_invalid')
                    })
                }
                else {
                    inputs.forEach( e => {
                        e.classList.remove('form__input_compared_valid')
                    })
                }
            }

        } else {
            if(isPasswordInput) {
                document.getElementById("inputDescription").textContent = "Password must contain a capital letter, a number and be at least 8 characters"
            }



            input.style.outline = "none";
            input.classList.add('form__input_invalid');
            input.classList.remove('form__input_valid');


            if (input.value === '') {
                if(connectedInput) {
                    inputs.forEach(e => {
                        e.classList.remove('form__input_compared_valid');
                    })
                }

                input.style.outline = '';
                input.classList.remove('form__input_invalid');
                input.classList.remove('form__input_valid');

                if(isPasswordInput) {
                    document.getElementById("inputDescription").textContent = ""
                }
            }
        }


    }
}
