import { LightningElement, api, wire } from 'lwc';
import findShowroomByAccountId from '@salesforce/apex/ShowroomsController.findShowroomByAccountId';


export default class ShowroomsList extends LightningElement {
    columns =  [
        { label: 'Name', fieldName: 'Name', type:'text' }, 
    ];

    @api accountId;
    @wire(findShowroomByAccountId,{accountId:'$accountId'}) showrooms;
    
    showroomidfromparent;
    handleClick(event){
        event.preventDefault();     
        this.showroomidfromparent = event.target.dataset.showroomId;
    }

}