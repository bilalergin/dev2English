import CATEGORY__FIELD from "@salesforce/schema/Car__c.Category__c";
import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import { LightningElement, wire } from "lwc";
import CAR_OBJECT from "@salesforce/schema/Car__c";

export default class CarFilter extends LightningElement {
  categoryOptions = [];
  selectedCategory = "All";

  @wire(getObjectInfo, {objectApiName: CAR_OBJECT})carInfo;

  @wire(getPicklistValues, {
    fieldApiName: CATEGORY__FIELD,
    recordTypeId: "$carInfo.data.defaultRecordTypeId"
  })
  picklistHandler({ data, error }) {
    if (data) {
      this.categoryOptions = this.picklistGenerator(data);
      this.categoryOptions.push({label:"All", value:"All"});
    }
  }

  picklistGenerator(data) {
    return data.values.map(item => ({
      label: item.label,
      value: item.value
    }));
  }

  changeHandler(event){
        this.selectedCategory = event.target.value;
  }

}
