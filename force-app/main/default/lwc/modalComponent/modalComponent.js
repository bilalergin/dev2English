import { LightningElement } from 'lwc';
//! 22.08.2023
export default class ModalComponent extends LightningElement {

    closeHandler() {
        const evt = new CustomEvent('close');
        this.dispatchEvent(evt);
    }
}