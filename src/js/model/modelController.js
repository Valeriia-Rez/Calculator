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
        if (this.waitingForSecondOperand === true) return;

        if (!this.displayValue.includes(dot)) {
            this.displayValue += dot;
        }
    }

    handleOperator(nextOperator) {
        const performCalculation = {
            '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

            'x': (firstOperand, secondOperand) => firstOperand * secondOperand,

            '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

            '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

            '=': (firstOperand, secondOperand) => secondOperand
        };

        const inputValue = parseFloat(this.displayValue);

        if (this.operator && this.waitingForSecondOperand) {
            this.operator = nextOperator;
            console.log(this);
            return;
        }

        if (this.firstOperand === null) {
            this.firstOperand = inputValue;
        } else if (this.operator) {
            const currentValue = this.firstOperand || 0;
            const result = performCalculation[this.operator](currentValue, inputValue);
            this.displayValue = String(result);
            this.firstOperand = result;
        }

        this.waitingForSecondOperand = true;
        this.operator = nextOperator;

    }

    resetCalculator() {
        this.displayValue = '0';
        this.firstOperand = null;
        this.waitingForSecondOperand = false;
        this.operator = null;
    }
}