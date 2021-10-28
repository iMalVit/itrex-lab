
export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.createPatients(this.model.listOfPatients);

    }
}