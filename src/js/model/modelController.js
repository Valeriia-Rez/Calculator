export default class modelController {
    constructor() {
        this.displayValue = "0";
        this.firstOperand = null;
        this.operator = null;
        this.waitingForSecondOperand = false;
    }

    inputNumber(number) {
        if (this.waitingForSecondOperand === true) {
            this.displayValue = number;
            this.waitingForSecondOperand = false;
        } else {
            this.displayValue = this.displayValue === '0' ? number : this.displayValue + number;

        }

    }

    inputDecimal(dot) {
        if (!this.displayValue.includes(dot)) {
            this.displayValue += dot;
        }
    }

    handleOperator(nextOperator) {
        const inputValue = parseFloat(this.displayValue);

        if (this.firstOperand === null) {
            this.firstOperand = inputValue;
        } else if (this.operator) {
            const result = performCalculation[this.operator](this.firstOperand, inputValue);
            this.displayValue = String(result);
            this.firstOperand = result;
        }

        this.waitingForSecondOperand = true;
        this.operator = nextOperator;

    }
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

    'x': (firstOperand, secondOperand) => firstOperand * secondOperand,

    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

    '=': (firstOperand, secondOperand) => secondOperand
};