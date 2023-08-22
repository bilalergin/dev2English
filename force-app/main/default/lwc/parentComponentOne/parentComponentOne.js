import { LightningElement } from 'lwc';

export default class ParentComponentOne extends LightningElement {

    handleClick(){
        this.template.querySelector("c-child-component-one").handleChange();
    }
}