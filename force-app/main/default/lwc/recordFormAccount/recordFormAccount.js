import { LightningElement } from 'lwc';
import ACC_OBJECT from '@salesforce/schema/Account';//büyük yazmamızın sebebi bu variablar değişmeyecek demek
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import WEBSİTE_FIELD from '@salesforce/schema/Account.Website';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';//işlemden sonra orgun üstünde yeşil yazıyı görmek için yazıyoruz


export default class RecordForm extends LightningElement {
    recordId ="001Hu00002uZOXCIA4";//Burası hala hardcode
    objectName = ACC_OBJECT;//Bu şekilde soft code oluyor.
    //objectName = "Account";//bu şekilde yazınca hard code oluyor
    fields = [NAME_FIELD,TYPE_FIELD,INDUSTRY_FIELD,ANNUALREVENUE_FIELD,PHONE_FIELD,WEBSİTE_FIELD];

    successHandler(event){
        const successToast = new ShowToastEvent({
            title: "Success",
            message: "Account has been saved successfully!",
            variant: "success",
            mode: "sticky"//mesaj biz kapatana kadar kapanmaz
        });
        this.dispatchEvent(successToast);
    }

    errorHandler(event){
        const errorToast = new ShowToastEvent({
            title: "Error",
            message: "Error",
            variant: "error",
            mode: "sticky"//mesaj biz kapatana kadar kapanmaz
        });
        this.dispatchEvent(errorToast);
    }
}