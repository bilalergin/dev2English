import { api, LightningElement } from 'lwc';
//! 22.08.2023
export default class ProgressBar extends LightningElement {
    @api progressValue;
    @api progressSize;//sadece component adı ve attribute lar kebap case le yazılır

    @api resetProgress(){ //metot isimleri kebap case le yazılmaz
        this.progressValue = 50;
        this.progressSize = "Medium";
    }
}