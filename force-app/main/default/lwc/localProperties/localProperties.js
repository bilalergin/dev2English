import { LightningElement } from 'lwc';
//! 28.07.2023


export default class LocalProperties extends LightningElement {
    name;//tanımsız undefined
    fullName = 'Salesforce LWC';
    age = 36;
    isComplete = true;
    //üsttekiler primitive, alttakiler non-primitive data type
    
    //curly braces olanlar object,non-primitive
    //name, place = key. Dummy ve Türkiye ise valuedur
    location = {
        city : "Houston",
        country: " United States"
    }

    fruits = ["Banana"," Grape"," Apple"," Dragon"];//Bu da array,non-primitive
}