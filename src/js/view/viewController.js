export default class viewController {
    constructor() {
        this.number = "";
        this.plus = "+";
        this.minus = "-";
        this.divide = "/";
        this.multiply = "x";
    }

    renderNumberItems() {
            let number = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
            return number.map(item => (
                        `<div class="col-4 my-2">
                            ${item === 0 ? 
                                `<button class="btn btn-secondary px-5 rounded-pill btn-lg" data-id=${item} data-selector="number">${item}</button>`
                                : 
                            `<button class="btn btn-secondary rounded-circle btn-lg" data-id=${item} data-selector="number">${item}</button>`
                            }
                        </div>
                `)).join("");
    }

    getNumber(e){
      
        const numberId = e.target.dataset.id;
        this.number += numberId;
        const res = document.querySelector(".result");
        res.textContent = this.number;
    }

     
 renderOperators(e) {
    const res = document.querySelector(".result");
    if(e.target.dataset.id === this.divide){
    res.textContent = this.divide;
    } else if(e.target.dataset.id === this.multiply){
        res.textContent = this.multiply;
    } else if(e.target.dataset.id === this.minus){
        res.textContent = this.minus;
    }else if(e.target.dataset.id === this.plus){
        res.textContent = this.plus;
    }
    this.getNumber(e);
}

renderResult(result){
    const res = document.querySelector(".result");
    res.textContent = result;
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
                        <button class="btn btn-warning btn-lg rounded-circle text-white" data-selector="operation" data-id=${this.divide}>/</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 my-2">
                        <button class="btn btn-warning btn-lg rounded-circle text-white" data-selector="operation" data-id=${this.multiply}>x</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 my-2">
                        <button class="btn btn-warning btn-lg rounded-circle text-white" data-selector="operation" data-id=${this.minus}>-</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 my-2">
                        <button class="btn btn-warning btn-lg rounded-circle text-white" data-selector="operation" id="plus" data-id=${this.plus}>+</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 my-2">
                        <button class="btn btn-warning btn-lg rounded-circle text-white" id="equally" data-selector="operation">=</button>
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
    const number = document.querySelectorAll("[data-selector='number']");
    number.forEach(button => button.addEventListener("click", e =>  this.getNumber(e)));
    const operation = document.querySelectorAll("[data-selector='operation']");
    operation.forEach(button => button.addEventListener("click", e => this.renderOperators(e)));
   
}





}