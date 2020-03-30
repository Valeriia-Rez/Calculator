export default class viewController {
    constructor() {
        this.number = "0";

    }

    renderNumberItems() {
            let number = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
            return number.map(item => (
                        `
                        ${item === 0 ? 
                            `<div class="col-8 my-2 px-2 px-md-3 px-xl-4">
                                <button type="button" class="btn btn-secondary btn-block py-3 h-100 rounded-pill calculator-keys zero" data-id=${item} data-selector="number">${item}</button>
                            </div>`
                            : 
                        `<div class="col-4 p-0 my-2">
                            <button type="button" class="btn btn-secondary btn-lg px-4 py-3 rounded-circle calculator-keys" data-id=${item} data-selector="number">${item}</button>
                        </div>`
                        }`)).join("");
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
    <div class="row m-0">
        <div class="col-9">
            <div class="row mb-2">
                <div class="col-12 px-2 px-md-3 px-lg-4">
                    <button class="btn btn-light btn-block  btn-lg py-3  rounded-pill text-dark calculator-keys all-clear" value="all-clear">AC</button>
                </div>
            </div>
        
            <div class="row">
                ${this.renderNumberItems()}
                <div class="col-4 p-0 my-2">
                    <button class="btn btn-secondary btn-lg px-4 py-3 rounded-circle calculator-keys decimal" value=".">.</button>
                </div>
            </div>
        </div>
        
        <div class="col-3">
            <div class="row">
                <div class="col-12 mb-2 p-0">
                    <button type="button" class="btn btn-warning btn-lg px-4 py-3 rounded-circle text-white calculator-keys operator" value="/">/</button>
                </div>
            </div>
            <div class="row">
                <div class="col-12 my-2 p-0">
                    <button type="button" class="btn btn-warning btn-lg px-4 py-3 rounded-circle text-white calculator-keys operator" value="x">x</button>
                </div>
            </div>
            <div class="row">
                <div class="col-12 my-2 p-0">
                    <button type="button" class="btn btn-warning btn-lg px-4 py-3 rounded-circle text-white calculator-keys operator" value="-">-</button>
                </div>
            </div>
            <div class="row">
                <div class="col-12 my-2 p-0">
                    <button type="button" class="btn btn-warning btn-lg px-4 py-3 rounded-circle text-white calculator-keys operator" value="+">+</buttton>
                </div>
            </div>
            <div class="row">
                <div class="col-12 my-2 p-0">
                    <button type="button" class="btn btn-warning btn-lg px-4 py-3 rounded-circle text-white calculator-keys operator" value="=">=</button>
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