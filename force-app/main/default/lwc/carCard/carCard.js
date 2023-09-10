import CAR_OBJECT from '@salesforce/schema/Car__c';
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c';
import CONTROL_FIELD from '@salesforce/schema/Car__c.Control__c';
import DESCRIPTION_FIELD from '@salesforce/schema/Car__c.Description__c';
import FUELTYPE_FIELD from '@salesforce/schema/Car__c.Fuel_Type__c';
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c';
import PRICE_FIELD from '@salesforce/schema/Car__c.Price__c';
import SEATING_FIELD from '@salesforce/schema/Car__c.Seating_Capacity__c';
import CAR_CHANNEL from '@salesforce/messageChannel/CarChannel__c';
import { LightningElement, api, wire } from 'lwc';
import { MessageContext, subscribe, APPLICATION_SCOPE } from 'lightning/messageService';

export default class CarCard extends LightningElement {
    @api recordId;
    objectName = CAR_OBJECT;
    fields = {
        make : MAKE_FIELD,
        category : CATEGORY_FIELD,
        price : PRICE_FIELD,
        control : CONTROL_FIELD,
        fuel : FUELTYPE_FIELD,
        description : DESCRIPTION_FIELD,
        seating : SEATING_FIELD
    };
    carName;
    carUrl;

    @wire(MessageContext)
    context;

    handleRecordLoaded(event){
        const recordDetail = event.detail.records;
        this.carName = recordDetail[this.recordId].fields.Name.value;
        this.carUrl = recordDetail[this.recordId].fields.Picture_URL__c.value;
    }

    connectedCallback(){
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
        this.recordId = message.carId;
    }
}