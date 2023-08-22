import { LightningElement, api, track } from 'lwc';
//! 22.08.2023
export default class ChildComponentOne extends LightningElement {

    @track value =100;

   @api handleChange(){
        if(this.value == 100)
        this.value=200;
    else
        this.value=100;
    }
}
/*1.) Created a child component
2.) Created a method n child JS and annotated it with @api
3.) Created a parent component
4.) Added child component into the Parent component strucuture
5.) IN Parent comp JS, we use template property to query the parent html and invoke the child js method.*/