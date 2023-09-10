import { LightningElement, api } from 'lwc';

export default class CarTile extends LightningElement {
    @api car = {};

    clickHandler(){
        const selectEvent = new CustomEvent('carselect', {detail: this.car.Id});
        this.dispatchEvent(selectEvent);
    }
}