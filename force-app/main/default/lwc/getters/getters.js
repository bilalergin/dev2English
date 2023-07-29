import { LightningElement } from 'lwc';
//! 29.07.2023
//! GET bir keyword dür.Arrayleri göstermede ve hesaplamalarda kullanılır
export default class Getters extends LightningElement {
    fruits =["Apple", "Banana", "Orange", "Dragon"];
    number1 = 10;
    number2 = 20;

    get firstFruit() { 
        return this.fruits[0];
    }

    get sumOfNum() { 
        return this.number1+this.number2;
    }
}