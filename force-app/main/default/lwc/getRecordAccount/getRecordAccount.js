import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';
//! 09.08.2023
export default class GetRecordAccount extends LightningElement {

    recordId= "001Hu00002uZOXCIA4";

    name;
    type;
    industry;
    revenue;
    createdDate;
    rating;

    @wire(getRecord, {
        recordId: '$recordId',
        layoutTypes: ["Full"],
        modes: ["View"]
    })recordHandler({data, error}){
        if (data) {
            console.log("getRecord");
            console.log(data);
            this.name = data.fields.Name.value;
            this.type = data.fields.Type.displayValue;
            this.industry = data.fields.Industry.value;
            this.revenue = data.fields.AnnualRevenue.displayValue;
            this.createdDate = data.fields.CreatedDate.displayValue;
            this.rating = data.fields.Rating.value;//currency,picklist ve date'te display valueyu, diğerlerinde sadece valueyu seçiyoruz.
        }if (error) {
            console.log(error);
            
        }
    }
}