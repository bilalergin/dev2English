import getCars from '@salesforce/apex/CarCtrl.getCars';
import { LightningElement, wire } from 'lwc';
import CAR_CHANNEL from '@salesforce/messageChannel/CarChannel__c';
import { APPLICATION_SCOPE, MessageContext, publish, subscribe } from 'lightning/messageService';

export default class CarTileList extends LightningElement {
    category = "All";
    selectedCarId;

    @wire(MessageContext)
    context;
    
    @wire(getCars, {type: '$category'})
    cars;

    connectedCallback (){
        this.subscribeHandler();
    }
    subscribeHandler(){
        subscribe(
            this.context,
            CAR_CHANNEL,
            (message) => {this.handleMessage(message)},
            {scope: APPLICATION_SCOPE}
        );
    }
    handleMessage(message){
        console.log("Message received: " + JSON.stringify(message));
        this.category = message.carType;
    }

    carSelectHandler(event){
        console.log("Custom Eevent Received: " + event.detail);
        this.selectedCarId = event.detail;
        //prepare message
        const message = {
            carId: this.selectedCarId
        };
        //publish selectedCarId
        publish(
            this.context,
            CAR_CHANNEL,
            message
        );

    }
}