import { LightningElement } from 'lwc';
import OPP_OBJECT from '@salesforce/schema/Opportunity';
import OPP_NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import ACC_NAME_FIELD from '@salesforce/schema/Opportunity.AccountId';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';//işlemden sonra orgun üstünde yeşil yazıyı görmek için yazıyoruz


export default class RecordFormOpp extends LightningElement {
    recordId ="006Hu00001VDdvdIAD";//Burası hala hardcode
    objectName = OPP_OBJECT;//Bu şekilde soft code oluyor.
    //objectName = "Account";//bu şekilde yazınca hard code oluyor
    fields = [OPP_NAME_FIELD, ACC_NAME_FIELD, CLOSEDATE_FIELD, AMOUNT_FIELD, TYPE_FIELD, STAGENAME_FIELD];

    successHandler(event){
        const successToast = new ShowToastEvent({
            title: "Success",
            message: "Opportunity has been saved successfully!",
            variant: "success",
            mode: "sticky"//mesaj biz kapatana kadar kapanmaz
        });
        this.dispatchEvent(successToast);
    }

    errorHandler(event){
        const errorToast = new ShowToastEvent({
            title: "Error",
            message: "Opportunity has not been saved successfully!",
            variant: "error",
            mode: "sticky"//mesaj biz kapatana kadar kapanmaz
        });
        this.dispatchEvent(errorToast);
    }
}