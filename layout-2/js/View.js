

export default class View {
    constructor() {

    }

    getElement(selector) {
        return document.querySelector(selector);
    }

    status(param) {
        if(param) {
            return 'offline'
        }

        else {
            return 'online'
        }
    }

    time(param) {
        const date = new Date(param);
        return date.toString().substr(0, 16);
    }

    createPatients(data) {
        const patients = data.map(patient => {
            return `<div class="patient">
                    <div class="patient__main-info">
                        <img src="${patient.avatar}" class="patient__avatar">

                        <div class="patient__description-box patient__description-box_margin-left">
                            <div class="patient__name">${patient.firstName} ${patient.lastName}</div>
                            <div class="status">
                                <div class="status__indicator status__indicator_${this.status(patient.status)}"></div>
                                <div class="status__text">Appointment is confirmed</div>
                            </div>
                        </div>
                    </div>
                    <div class="patient__info">
                        <div class='patient__description-box patient__description-box_flex'>
                            <img class="patient__time-icon" src="./assets/icons/time.svg">
                            <div class="patient__time-text"> ${this.time(patient.time)} 4 pm – 5 pm</div>
                        </div>
                        <div class='patient__description-box patient__description-box_margin' >
                            <img class="patient__document-icon" src="./assets/icons/document.svg">
                            <div class="patient__document-text">${patient.description}</div>
                        </div>
                    </div>
                </div>`
        });

        const patientsSum = patients.reduce((prev, cur) => prev + cur);

        this.getElement(".board__wrapper-box").innerHTML = `${patientsSum}`;
    }


}
