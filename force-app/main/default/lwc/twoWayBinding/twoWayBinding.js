import { LightningElement } from 'lwc';//! 29.07.2023


export default class TwoWayBinding extends LightningElement {
    fullName = 'Bilal Ergin';
    course = 'Salesforce Developer';
    changeHandler(event) {
        this.course = event.target.value;

    }
}