import modelController from './model/modelController';
import viewController from './view/viewController';
const model = new modelController();
const view = new viewController();
/*const addNum = () => {
    model.add(3, 4);
    view.renderResult(model.result);
}*/
const renderNumbers = () => {
    view.renderCalculatorUI();
}

/*document.querySelector("[data-selector = 'plus-btn']").addEventListener("click", addNum);*/
window.addEventListener("DOMContentLoaded", renderNumbers);