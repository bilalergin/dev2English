import { LightningElement, api, track } from 'lwc';

export default class ChildComponentOne extends LightningElement {

    @track value =100;

   @api handleChange(){
        if(this.value == 100)
        this.value=100;
    else
        this.value=100;
    }
}