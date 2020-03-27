export default class viewController {
    constructor() {
        this.number = "0";

    }

    renderNumberItems() {
            let number = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
            return number.map(item => (
                        `<div class="col-4 my-2">
                        ${item === 0 ? 
                            `<button type="button" class="btn btn-secondary px-5 ml-3 rounded-pill btn-lg calculator-keys" data-id=${item} data-selector="number">${item}</button>`
                            : 
                        `<button type="button" class="btn btn-secondary rounded-circle btn-lg calculator-keys px-4" data-id=${item} data-selector="number">${item}</button>`
                        }
                    </div>
            `)).join("");
}

    getNumber(e){
        this.number = e.target.dataset.id;
    }

    updateDisplay(value){
        const res = document.querySelector(".result");
        res.textContent = value;
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
        
            <div class="row justify-content-between my-2">
                ${this.renderNumberItems()}
                <div class="col-4 my-2">
                    <button class="btn btn-secondary rounded-circle btn-lg px-4" value=".">.</button>
                </div>
            </div>
        </div>
        
        <div class="col-3">
            <div class="row">
                <div class="col-12 my-2">
                    <button type="button" class="btn btn-warning btn-lg rounded-circle text-white calculator-keys operator" value="/">/</button>
                </div>
            </div>
            <div class="row">
                <div class="col-12 my-2">
                    <button type="button" class="btn btn-warning btn-lg rounded-circle text-white calculator-keys operator" value="x">x</button>
                </div>
            </div>
            <div class="row">
                <div class="col-12 my-2">
                    <button type="button" class="btn btn-warning btn-lg rounded-circle text-white calculator-keys operator" value="-">-</button>
                </div>
            </div>
            <div class="row">
                <div class="col-12 my-2">
                    <button type="button" class="btn btn-warning btn-lg rounded-circle text-white calculator-keys operator" value="+">+</buttton>
                </div>
            </div>
            <div class="row">
                <div class="col-12 my-2">
                    <button type="button" class="btn btn-warning btn-lg rounded-circle text-white calculator-keys operator equal-sign" value="=">=</button>
                </div>
            </div>
        </div>
    </div>`;

const numberItems = document.createElement("div");
numberItems.className = "render-items";
numberItems.innerHTML = calculatorUI;
const numbers = document.querySelector("[data-selector='numbers']");
numbers.appendChild(numberItems);
const number = document.querySelectorAll("[data-selector='number']");
number.forEach(button => button.addEventListener("click", e =>  this.getNumber(e)));


}
}