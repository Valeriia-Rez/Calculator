export default class viewController {
    constructor() {

    }

    renderNumberItems() {
            let number = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
            return number.map(item => (
                        `<div class="col-4 my-2">
                            ${item === 0 ? 
                                `<button class="btn btn-secondary px-5 rounded-pill btn-lg">${item}</button>`
                                : 
                            `<button class="btn btn-secondary rounded-circle btn-lg">${item}</button>`
                            }
                        </div>
                `)).join("");
    }
    renderCalculatorUI() {
            let calculatorUI = `
        <div class="row">
            <div class="col-9">
                <div class="row my-2">
                    <div class="col-4">
                        <button class="btn btn-light btn-lg rounded-circle text-dark">AC</button>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-light btn-lg rounded-circle text-dark">+/-</button>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-light btn-lg rounded-circle text-dark">%</button>
                    </div>
                </div>
                <div class="row my-2">
                    ${this.renderNumberItems()}
                   
                </div>
            </div>
            <div class="col-3">
                <div class="row">
                    <div class="col-12 my-2">
                        <button class="btn btn-warning btn-lg rounded-circle">/</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 my-2">
                        <button class="btn btn-warning btn-lg rounded-circle">x</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 my-2">
                        <button class="btn btn-warning btn-lg rounded-circle">-</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 my-2">
                        <button class="btn btn-warning btn-lg rounded-circle">+</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 my-2">
                        <button class="btn btn-warning btn-lg rounded-circle">=</button>
                    </div>
                </div>
            </div>
        </div>
      `;

            const numberItems = document.createElement("div");
            numberItems.className = "render-items";
            numberItems.innerHTML = calculatorUI;
            const numbers = document.querySelector("[data-selector='numbers']");
            numbers.appendChild(numberItems);
        }
        /*renderResult(result) {
            const res = document.querySelector(".result");
            res.textContent = result;
        }*/

}