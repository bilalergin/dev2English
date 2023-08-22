import { LightningElement } from 'lwc';
//! 22.08.2023
export default class ProgressParent extends LightningElement {
    progress;
    size;

    changeHandler(event) {
        if(event.target.name == "Progress") {
            this.progress = event.target.value;
        } else {
            this.size = event.target.value;
        }
    }

    get sizeOptions() {
        return [
            {label: "Small", value: "Small"},
            {label: "Medium", value: "Medium"},
            {label: "Large", value: "Large"}
        ];
    }

    resetHandler() {
        

            /*this.template.querySelector("c-progress-bar").resetProgress();
            this.progressSize = "Medium";//bunu ve alttakini yazmasak da üstteki satır çalışıyor.
            this.progressValue = 50;*/ // derste yaptığımız.Sadece barı medium ve 50 size yapıyor
          
        
        //! Child component'e sıfırlama komutu gönder.Sadece barı medium ve 50 size yapıyor
        const progressBar = this.template.querySelector('c-progress-bar');
        if (progressBar) {
            progressBar.resetProgress();
        }
    
        //! Girilen değerleri sıfırla. Valueyu sıfırlıyor
        const inputFields = this.template.querySelectorAll('lightning-input');
        if (inputFields) {
            inputFields.forEach((input) => {
                input.value = '';
            });
        }
        
        //! Seçilen size değerini sıfırla. Comboboxı sıfırlıyor
        const combobox = this.template.querySelector('lightning-combobox');
        if (combobox) {
            combobox.value = undefined;
        }
    }
    
}