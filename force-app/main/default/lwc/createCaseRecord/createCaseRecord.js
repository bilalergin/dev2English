import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import CASE_OBJECT from '@salesforce/schema/Case';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CreateRecordAccount extends LightningElement {

    priorityOptions = [];
    formdata = {};
    //build an case record with inputted data
    changeHandler(event) {
        //const name = event.target;//targettan sonra name de yazabiliriz
        //const value = event.target;//targettan sonra value da yazabiliriz
        const {name, value} = event.target;
        this.formdata[name] = value;//name= key, value=value
        console.log(JSON.stringify(this.formdata));
        
    }

    //clear the form
    cancelHandler() {
        this.template.querySelector("form").reset();
        this.formdata = {};

        const inputs = this.template.querySelectorAll('lightning-combobox');
inputs.forEach(item => {
   item.value = undefined; //comboboxları temizler, picklist alanlarını
});
    }

    //create a brand new record
    saveHandler() {
        
        //prepare recordInput
        const recordInput = {
            apiName: CASE_OBJECT.objectApiName,
            fields: this.formdata
        };

        //create case record
        createRecord(recordInput)
            .then(result => {
                console.log(result);
                this.showToast("Success", "Case record has been created successfully!", "success");
                this.cancelHandler();
            })
            .catch(error => {
                console.error(error);
                this.showToast("Error", "Error occurred while creating account record", "error");
            })
    }

    showToast(title, message, variant) {
        const toast = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(toast);
    }

    @wire(getObjectInfo, {objectApiName: CASE_OBJECT})
    caseInfo;

    @wire(getPicklistValuesByRecordType, {
        objectApiName: CASE_OBJECT,
        recordTypeId: '$caseInfo.data.defaultRecordTypeId'
    }) picklistHandler({data, error}) {
        if(data) {
            console.log(data);
            this.priorityOptions = data.picklistFieldValues.Priority.values;
        }
        if(error) {
            console.error(error);
        }
    }
}