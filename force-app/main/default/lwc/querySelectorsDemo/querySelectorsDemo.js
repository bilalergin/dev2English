import { LightningElement } from 'lwc';

export default class QuerySelectorsDemo extends LightningElement {


    fruits = ["Apple", "Banana", "Orange", "Grape", "Dragon"];

    clickHandler(){
        //h1 element
        //burada verdiğimiz stiller click me ye tıklayınca geliyor ama html de verince sabit olarak baştan çalışıyor.
        const h1elem = this.template.querySelector("h1");
        console.log(h1elem.innerText);
        h1elem.style.color = "blue";
        h1elem.style.backgroundColor = "pink";
        h1elem.style.border = "2px solid green";
        h1elem.style.textAlign = "center";


        //p element
        //modularity, reusebility, readability her zaman hatırmalamız gereken 3 özellik kod yazarken 

        const pelem = this.template.querySelector("p");
        console.log(pelem.innerText);
        pelem.style.color = "brown";
        pelem.style.backgroundColor = "lightgreen";
        pelem.style.border = "2px solid red";
        pelem.style.textAlign = "center";


        //div =>fruits element
        const divelems = this.template.querySelectorAll("div.fruit");
divelems.forEach(item =>{
    console.log(item.innerText);
    item.style.border = "2px solid yellow";
    item.setAttribute("class", "slds-align_absolute-center");
})
    }
}