import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACC_OBJECT from '@salesforce/schema/Account';

export default class GetObjectInfoAccount extends LightningElement {
    
    accountRtId;

    @wire(getObjectInfo, {objectApiName: ACC_OBJECT})
    accountInfoHandler({data, error}){
        
        if (data){
            this.accountRtId= data.defaultRecordTypeId;
        }
        if (error) {
            console.log(error);
        }
    }
    // accountInfoHandler({result}){
    //     console.log(result);
    // }10.satırdan itibaren önce bu kodu yazıp orgdan inspect yapıyoruz.sonra konsoldan defaultRecordTypeId yi kopyalıyoruz
}