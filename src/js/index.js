import modelController from './model/modelController';
import viewController from './view/viewController';
const model = new modelController();
const view = new viewController();

const renderOperators = (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        model.handleOperator(target.value);
        view.updateDisplay(model.displayValue);
        return;
    }

    if (target.classList.contains('decimal')) {
        model.inputDecimal(target.value);
        view.updateDisplay(model.displayValue);
        return;
    }


    if (target.classList.contains('all-clear')) {
        model.resetCalculator();
        view.updateDisplay(model.displayValue);
        return;
    }

    model.inputNumber(view.number);
    view.updateDisplay(model.displayValue);

}


const renderNumbers = () => {
    view.renderCalculatorUI();
    view.updateDisplay(model.displayValue);

    const keys = document.querySelectorAll('.calculator-keys');
    keys.forEach(button => button.addEventListener("click", renderOperators));
}


window.addEventListener("DOMContentLoaded", renderNumbers);