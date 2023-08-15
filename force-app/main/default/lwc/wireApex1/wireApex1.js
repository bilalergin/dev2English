import getTopAccounts from '@salesforce/apex/AccountCtrl.getTopAccounts';
import { LightningElement, wire } from 'lwc';

const COLUMNS = [
    {label: "Account Name", fieldName: "Name", type: "text"},
    {label: "Type", fieldName: "Type", type: "text"},
    {label: "Industry", fieldName: "Industry", type: "text"},
    {label: "Annual Revenue", fieldName: "AnnualRevenue", type: "currency"}
];

export default class WiredApex1 extends LightningElement {

    accounts;
    columns = COLUMNS;

    @wire(getTopAccounts)
    accountsHandler({data, error}) {
        if(data) {
            this.accounts = data;
        }
        if(error) {
            console.error(error);
        }
    }

}



// import getTopAccounts from '@salesforce/apex/AccountCtrl.getTopAccounts';
// import { LightningElement, wire } from 'lwc';

// const COLUMNS =[
//     {label: "Account name", fieldName: "Name", type: "text"},
//     {label: "Type", fieldName: "Type", type: "text"},
//     {label: "Industry", fieldName: "Industry", type: "text"},
//     {label: "Annual Revenue", fieldName: "AnnualRevenue", type: "currency"}
// ];
// //buranın üstünde yazılanlar normalde HTML de görünmez. Bu nedenle aşağıya columsı aşağıda tanımlarız

// export default class WireApex1 extends LightningElement {


// accounts;//classta istediğimiz 5 record için 

// columns = COLUMNS; //Htmlde görmek için

// @wire(getTopAccounts)
// accountHandler({data, error}){
//     if (data) {
//         console.log(data);
        
//     }if (error) {
//         console.error(error);
        
//     }
// }


// }