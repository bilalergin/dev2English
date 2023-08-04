import { LightningElement } from 'lwc';

import OPP_OBJECT from '@salesforce/schema/Opportunity';
import OPP_NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import ACC_NAME_FIELD from '@salesforce/schema/Opportunity.AccountId';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';//işlemden sonra orgun üstünde yeşil yazıyı görmek için yazıyoruz

export default class RecordEditFormOpp extends LightningElement {

    objectName = OPP_OBJECT;
    recordId= "006Hu00001VDdvdIAD";
    fields = {
        name: OPP_NAME_FIELD,
        accName: ACC_NAME_FIELD,
        closedate: CLOSEDATE_FIELD,
        amount: AMOUNT_FIELD,
        type: TYPE_FIELD,
        stage: STAGENAME_FIELD
    }
    successHandler(event){
        const successToast = new ShowToastEvent({
            title: "Success",
            message: "Opportunity record has been saved successfully!",
            variant: "success",
        });
        this.dispatchEvent(successToast);
    }
}