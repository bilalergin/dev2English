import { LightningElement } from 'lwc';
//! 29.07.2023
// rendering: ekranda gösterme
export default class ConditionalRendering2 extends LightningElement {
    showContent = false;
    clickHandler (){
        this.showContent = true;
    }

}