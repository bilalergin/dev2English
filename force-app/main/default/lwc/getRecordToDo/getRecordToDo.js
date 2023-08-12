import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';
//! 09.08.2023
export default class GetRecordToDo extends LightningElement {

    toDoId= "a07Hu00000mpAfgIAE";

    @wire(getRecord, {
        recordId:"$toDoId",
        layoutTypes: ["Full"],
        modes: ["Edit"]

    })toDo;
}