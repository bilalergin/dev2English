import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACC_OBJECT from '@salesforce/schema/Account';
export default class GetPicklistValuesIndustry extends LightningElement {

    //! 05.08.2023


    accountRtId; //undefined
    industryOptions = [];
    selectedIndustry;
    changeHandler(event){
        this.selectedIndustry = event.target.value;
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
        }
    }

    @wire(getPicklistValues, {fieldApiName: INDUSTRY_FIELD, recordTypeId: '$accountRtId'})//buradaki $accountRtId ile: id değişebilir bu nedenle bu wire önce çalışırsa 1. wire dan sonra tekrar çalış demek. bu value ya !reactive! value denir. 
    picklistHandler({data, error}) {
        if(data) {
            this.industryOptions = data.values;
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