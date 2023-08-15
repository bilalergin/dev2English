import { deleteRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class DeleteRecordFunction extends LightningElement {
    recId;

    changeHandler(event){
        this.recId = event.target.value;
    }

    deleteHandler(){
        //prepare recordId
        const recordId = this.recId;

        //call deleteRecord function
        deleteRecord(recordId)
        .then(result =>{
            this.showToast("Success", "Record has been deleted successfully!", "success");
        })
        .catch(error =>{
            console.error(error);
            this.showToast("Error",error.body.message,"error");//sistemin error mesajını böyle görürüz
            // this.showToast("Error","Error while deleting record","error");//bizim kendi error mesajımız.
        })
    }
    showToast(title, message, variant){
        const toast = new ShowToastEvent({title, message, variant});
        this.dispatchEvent(toast);
    }
    //! wire ile çağırdıklarımız adaptor
    //! wiresız çağırdıklarımız function(create,update,delete)

    //? 1.What are 2 types using in LWC for iteration on the DOM site? //Queryy selector ve lwc refs
   //! 2.What are two types of your using LWC for iterating through array?  // for each
}