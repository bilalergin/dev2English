import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import LS_FIELD from '@salesforce/schema/Contact.LeadSource';
//! 08.08.2023
export default class GetPicklistValuesLeadSource extends LightningElement {

    vendorRtId;
    leadSourceOptions = [];
    selectedLeadSource;
    changeHandler(event){
        this.selectedLeadSource = event.target.value;
    }

    @wire(getObjectInfo, {objectApiName: CONTACT_OBJECT})
    objectInfoHandler({data, error}) {
        if(data) {
            console.log(data);
            const recordtypeids = data.recordTypeInfos;
            console.log(JSON.stringify(Object.keys(recordtypeids)));
           this.vendorRtId= Object.keys(recordtypeids).find(recordtypeid => recordtypeids [recordtypeid].name === 'Vendor Contact');//FILTER çalışmadı onun yerine FIND kullandık
        }
        if(error) {
            console.error(error);
        }
    }
    @wire(getPicklistValues, {fieldApiName: LS_FIELD, recordTypeId:'$vendorRtId'})//record typeId primitive data type istiyor onun için filter yerine find kullandık. Filter: array create ediyor find: primitive dataları getiriyor.
    picklistHandler({data, error}) {
    if (data) {
        console.log(data);
        this.leadSourceOptions = data.values;
        
    }if (error) {
        console.log(error);
        
    }
    }
}