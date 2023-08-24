import getCars from '@salesforce/apex/CarCtrl.getCars';
import { LightningElement, wire } from 'lwc';

export default class CarTileList extends LightningElement {
    category = "All";

    @wire(getCars, {type: "$category"})cars;
}