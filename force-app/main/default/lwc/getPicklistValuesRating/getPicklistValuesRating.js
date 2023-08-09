import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import ACC_OBJECT from '@salesforce/schema/Account';
export default class GetPicklistValuesRating extends LightningElement {
    
    //! 05.08.2023

    accountRtId; //undefined
    ratingOptions = [];
    selectedRating;
    changeHandler(event){
        this.selectedRating = event.target.value;
    }
    @wire(getObjectInfo, {objectApiName: ACC_OBJECT})
    accountInfoHandler({data, error}) {
        if(data) {
            this.accountRtId = data.defaultRecordTypeId;
            console.log(data);
        }
        if(error) {
            console.error(error);//error siyah renkte olur
            // console.error(error);böyle yazarsak error kırmızı renkte olur
        }//! shift+alt+altok tuşlarına basarsak satırı bir alta kopyalar
    }

    @wire(getPicklistValues, {fieldApiName: RATING_FIELD, recordTypeId: '$accountRtId'})//buradaki $accountRtId ile: id değişebilir bu nedenle bu wire önce çalışırsa 1. wire dan sonra tekrar çalış demek. bu value ya !reactive! value denir. 
    picklistHandler({data, error}) {
        if(data) {
            this.ratingOptions = data.values;
        }
        if(error) {
            console.error(error);
        }
    }
}

// picklistHandler(result){
// console.log(result);
// }23 ve 25 satıra ne yazacağımızı bulmak için yazdık

    
// }