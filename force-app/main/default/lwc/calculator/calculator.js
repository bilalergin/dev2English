import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track expression = '';

    handleClick(event) {
        this.expression += event.target.value;
    }

    handleInput(event) {
        this.expression = event.target.value;
    }

    calculate() {
        try {
            this.expression = eval(this.expression).toString();
        } catch (error) {
            this.expression = 'Error';
        }
    }

    clear() {
        this.expression = '';
    }
}
