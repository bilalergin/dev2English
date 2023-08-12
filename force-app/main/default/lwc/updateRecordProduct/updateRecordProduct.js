import { getRecord, updateRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UpdateRecordProduct extends LightningElement {
   
   proId = "a05Hu00000dnJFCIA2";
   product;
   formdata = {};
   showValidations;
   validationMessage;

   changeHandler(event){
    const {name,value} = event.target;
    this.formdata[name] = value;
   }

   updateHandler(){
    //data validation: if description blank show message
    // !this.formdata.Description__c: description undefined demek
    // this.formdata.Description__c == "": decsription boşsa demek
    if (this.formdata && (!this.formdata.Description__c || this.formdata.Description__c == "")) {
        this.showValidations = true;//description undefined veya boşsa alttaki mesajı göster
        this.validationMessage = "Please enter a valid description about the product"
    }else{
        this.showValidations = false;//description da sıkıntı yoksa validation gösterme
    }

    // !this.showValidations :validation yoksa demek
    if (!this.showValidations) {
        //prepare recordInput
        const recordInput = {
            fields: this.formdata
        };
        //call update record
        updateRecord(recordInput)
        .then(result => {
            this.showToast("Success", "Product record has been created successfully!", "success");

        })
        .catch(error => {
            this.showToast("Error", "Error occurred while creating product record", "error");

    })
}

   }
   showToast(title, message, variant) {
    const toast = new ShowToastEvent({
        title: title,
        message: message,
        variant: variant
    });
    this.dispatchEvent(toast);
}

    @wire(getRecord, {
        recordId:"$proId",
        layoutTypes:["Full"],
        modes : ["Edit"]
    })productHandler({data, error}){
    if (data) {
        this.product = data;//product ı data ya eşitledik. Bu nedenle artık hem burada hem de html de product.data yerine sadec product yazıyoruz
        this.formdata["Id"] = this.proId;
        this.formdata["Name"] = this.product.fields.Name.value;
        this.formdata["Brand__c"] = this.product.fields.Brand__c.value;
        this.formdata["Category__c"] = this.product.fields.Category__c.value;
        this.formdata["Description__c"] = this.product.fields.Description__c.value;
        
    }
}
}