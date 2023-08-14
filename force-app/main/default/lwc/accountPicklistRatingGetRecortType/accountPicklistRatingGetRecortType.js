
import { LightningElement, wire} from 'lwc';
import Account from '@salesforce/schema/Account';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import Rating from '@salesforce/schema/Account.Rating';
export default class AccountPicklistRatingGetRecortType extends LightningElement {


 selectedRating;
 accRtId;
 ratingOptions=[];
@wire (getObjectInfo,{objectApiName:Account})
     accountInfoHandler({data,error}){
        if(data){
            console.log("Data results: ", data);
            this.accRtId = data.defaultRecordTypeId;  
        } if(error){
            console.log("Errors: ", error);
        }
    }
    @wire(getPicklistValues,{fieldApiName: Rating,recordTypeId:"$accRtId"})
    picklistInfoHandler({data,error}){
        if(data){
            this.ratingOptions = this.picklistGenerator(data);
        } if(error){
            console.log(error);
        }
    }
        picklistGenerator(data){
            return data.values.map(item =>
                ({label: item.label,
                value: item.value}));
         }
        clickHandler(event){
        this.selectedRating = event.target.value;
        }
                
        }