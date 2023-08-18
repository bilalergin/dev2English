import { LightningElement } from 'lwc';

export default class QuerySelector2 extends LightningElement {

    fruits=['Banana','Apple','Orange','Grape','Dragon'];

    handleClick(){
        //h1 tag
    const helem = this.template.querySelector('h1');
    console.log(helem.innerText);

    helem.style.color = "purple";
    helem.style.backgroundColor = "pink";
    helem.style.border = "2px solid black";
    helem.style.fontFamily='fantasy';
    helem.style.fontStyle='italic';
    helem.style.borderRadius='6px';
    
       // p tag
    const pelem = this.template.querySelector('p');
    console.log(pelem);

    pelem.style.color = "blue";
    pelem.style.backgroundColor = "white";
    pelem.style.border = "2px solid purple";
    pelem.style.margin ='2px';
    pelem.style.fontFamily='monoSpace';
    pelem.style.borderRadius='6px';
    
        // div tag
        const divelem = this.template.querySelectorAll('div.child');
        console.log(divelem);

        divelem.forEach(item => {
            console.log (item.innerText);
            item.style.color = "yellow";
            item.style.backgroundColor = 'grey';
            item.style.border = "2px solid purple";
            item.style.margin ='4px';
            item.style.borderRadius='6px';
            item.setAttribute('class','slds-align_absolute-center'); //slds-box_x-small
        
        });

}
}