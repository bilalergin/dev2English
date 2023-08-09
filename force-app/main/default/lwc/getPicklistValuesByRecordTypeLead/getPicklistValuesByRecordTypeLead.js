import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import LEAD_OBJECT from '@salesforce/schema/Lead';
//! 08.08.2023
export default class GetPicklistValuesByRecordTypeLead extends LightningElement {

    leadSourceOptions= [];
    ratingOptions= [];
    leadStatusOptions= [];

    selectedleadSource;
    selectedRating;
    selectedleadStatus;

    changeHandler(event){
        const name = event.target.name;//name yerine label da kullanabliriz ama labelı client görür(frontend) ama name i görmez. Labeli kullanırsak müşteri değiştirmek isterse kodu da değiştirmek zorunda kalırız ama name i kullanınca o backendde olacağı için değiştirmeye gerek kalmaz.
        if (name === "Lead Source") {
            this.selectedleadSource = event.target.value;
        }else if (name === "Rating") {
            this.selectedRating = event.target.value;

        }else {
            this.selectedleadStatus = event.target.value;

        }

    }


    @wire(getObjectInfo, {objectApiName: LEAD_OBJECT})
    leadInfo;//buna property diyoruz. Önceki derslerde if le yazıyorduk ona da function diyoruz.

    @wire(getPicklistValuesByRecordType, {objectApiName: LEAD_OBJECT , recordTypeId: '$leadInfo.data.defaultRecordTypeId'})
    picklistHandler({data, error}){
        if (data) {
            console.log(data); 
            this.leadSourceOptions = data.picklistFieldValues.LeadSource.values;           
            this.ratingOptions = data.picklistFieldValues.Rating.values;           
            this.leadStatusOptions = data.picklistFieldValues.Status.values;           
        }if (error) {
            console.error(error);
            
        }
    }
}