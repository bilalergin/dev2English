import { LightningElement } from 'lwc';
//! 22.08.2023
export default class ModalComponent extends LightningElement {

    closeHandler() {
        const message ={
            name: "Bilal",
            title: "Salesforce Developer"
        };
        const evt = new CustomEvent('close',{detail: message});//buradaki close eventını parent htmlde onclose olarak çağırdık
        this.dispatchEvent(evt);
    }
}