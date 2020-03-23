import modelController from './model/modelController';
import viewController from './view/viewController';
const model = new modelController();
const view = new viewController();

class appController {
    constructor() {

    }
    renderNumbers() {
        view.renderCalculatorUI();
        const plus = document.querySelector("#plus");
        plus.addEventListener("click", app.addNumbers);
        const equally = document.querySelector("#equally");
        equally.addEventListener("click", app.displayResult);
    }
    addNumbers() {

        model.add(parseInt(view.number));

    }
    displayResult() {
        view.renderResult(model.result);
        console.log(model.result);
    }
}



const app = new appController();
window.addEventListener("DOMContentLoaded", app.renderNumbers);