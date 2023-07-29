import { LightningElement, track } from 'lwc';//! 29.07.2023
//! @track bir decoratördür
//! özellikleri 
//! 1. eklendiği valuyu Private yapar
//! 2.Obje ve arrayde değişiklik yapmaya ve yazdırmaya yarar
export default class TrackProperty extends LightningElement {
    @track contact = {
        name: "Bilal",
        title: "Developer"
    }
    changeHandler (event){
        this.contact.title = event.target.value;
    }
}