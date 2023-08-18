import getTopOpportunities from '@salesforce/apex/OpportunityCtrl.getTopOpportunities';
import { LightningElement, wire } from 'lwc';
    //15.08.2023

const COLUMNS = [
    {label: "Opportunity Name", fieldName: "Name", type: "text"},
    {label: "Amount", fieldName: "Amount", type: "currency"},
    {label: "Type", fieldName: "Type", type: "text"},
    {label: "Stage", fieldName: "StageName", type: "text"}]


export default class WireApexOpportunity extends LightningElement {

    opportunities;
    columns = COLUMNS;

    @wire(getTopOpportunities)
    oppHandler({data, error}){
        if (data) {
            this.opportunities = data;
            
        }
        if (error) {
            console.error(Error);
        }

    }
}