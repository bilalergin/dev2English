import { APPLICATION_SCOPE, MessageContext, subscribe } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';
import SI_CHANNEL from '@salesforce/messageChannel/SoftInnovas__c';
export default class LmsSubscriberComp extends LightningElement {
    //! 25.08.2023
    messageReceived;
    @wire(MessageContext)context;
    connectedCallback() {
        this.subscribeHandler();//buton olmadığı için callback yaptık
    }
    subscribeHandler() {
        subscribe(
            this.context,
            SI_CHANNEL,
            (message) => { this.handleMessage(message)},
            {scope: APPLICATION_SCOPE});//orgun her yerinde çalış
        }

    handleMessage(message) {
        console.log(JSON.stringify(message));
        this.messageReceived = message.lmsdata;
    }
}