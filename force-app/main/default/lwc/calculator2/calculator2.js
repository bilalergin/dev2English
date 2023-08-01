import { LightningElement, track } from 'lwc';

export default class MathOperations extends LightningElement {
    @track number1 = "";
    @track number2 = "";
    @track result = "";

    handleInputChange(event) {
        const inputName = event.target.label;
        const inputValue = event.target.value;

        if (inputName === 'Enter the first number') {
            this.number1 = parseInt(inputValue, 10);
        } else if (inputName === 'Enter the second number') {
            this.number2 = parseInt(inputValue, 10);
        }
    }

    addNumbers() {
        this.result = this.number1 + this.number2;
    }

    multiplyNumbers() {
        this.result = this.number1 * this.number2;
    }
    divideNumbers() {
        this.result = this.number1 / this.number2;
    }
    minusNumbers() {
        this.result = this.number1 - this.number2;
    }
}
