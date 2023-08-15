import getTopAccountsByType from '@salesforce/apex/AccountCtrl.getTopAccountsByType';
import { LightningElement, wire } from 'lwc';

export default class WireApex2 extends LightningElement {

    selectedType = "Customer - Direct";
    accounts;


@wire(getTopAccountsByType, {type:"$selectedType" })
accountsHandler({data, error}) {
    if (data) {
        this.accounts = data;        
    }
    if (error) {
        console.error(error);
        
    }

}
}