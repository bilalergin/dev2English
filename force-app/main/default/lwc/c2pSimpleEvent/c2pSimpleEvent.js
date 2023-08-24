import { LightningElement } from 'lwc';
//! 23.08.2023

export default class C2pSimpleEvent extends LightningElement {
    showModal = false;
    user;

    showHandler() {
        this.showModal = true;
    }

    handleClose(event) {
        this.showModal = false;
        this.user = event.detail;
        // this.user = event.detail.message.name; Bu şekilde sadece namei de çağırabiliriz.
    }
}