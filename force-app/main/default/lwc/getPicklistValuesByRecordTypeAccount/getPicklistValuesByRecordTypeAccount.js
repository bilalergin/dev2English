import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
//! 08.08.2023
export default class GetPicklistValuesByRecordTypeAccount extends LightningElement {

    industryOptions= [];
    typeOptions= [];
    ratingOptions= [];
    statusOptions= [];

    selectedIndustry;
    selectedType;
    selectedRating;
    selectedStatus;

    changeHandler(event){
        const name = event.target.name;//name yerine label da kullanabliriz ama labelı client görür(frontend) ama name i görmez. Labeli kullanırsak müşteri değiştirmek isterse kodu da değiştirmek zorunda kalırız ama name i kullanınca o backendde olacağı için değiştirmeye gerek kalmaz.
        if (name === "Industry") {
            this.selectedIndustry = event.target.value;
        }else if (name === "Type") {
            this.selectedType = event.target.value;

        }else if (name === "Rating") {
            this.selectedRating = event.target.value;

        }else {
            this.selectedStatus = event.target.value;

        }

    }


    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    accountInfo;//buna property diyoruz. Önceki derslerde if le yazıyorduk ona da function diyoruz.

    @wire(getPicklistValuesByRecordType, {objectApiName: ACCOUNT_OBJECT , recordTypeId: '$accountInfo.data.defaultRecordTypeId'})
    picklistHandler({data, error}){
        if (data) {
            console.log(data); 
            this.industryOptions = data.picklistFieldValues.Industry.values;           
            this.typeOptions = data.picklistFieldValues.Type.values;           
            this.ratingOptions = data.picklistFieldValues.Rating.values;           
            this.statusOptions = data.picklistFieldValues.Status__c.values;           
        }if (error) {
            console.error(error);
            
        }
    }
}