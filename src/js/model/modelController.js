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
            this.displayValue = number;
        }
        console.log("ee", this);
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
        }

        this.waitingForSecondOperand = true;
        this.operator = nextOperator;
        console.log("hh", this);
    }
}