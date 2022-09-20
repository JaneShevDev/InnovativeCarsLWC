import { LightningElement, api, wire } from 'lwc';
import findShowroomByAccountId from '@salesforce/apex/ShowroomsController.findShowroomByAccountId';


export default class ShowroomsList extends LightningElement {
    columns =  [
        { label: 'Name', fieldName: 'Name', type:'text' }, 
    ];

    @api accountId;
    @wire(findShowroomByAccountId,{accountId:'$accountId'}) showrooms;
    showroomidfromparent;

    handleClick2(event){
        this.showroomidfromparent = event.target.dataset.id;
                console.log(event.target.dataset);

        //        this.showroomidfromparent = event.target.dataset.showroomId;
    }

    test(e){
        console.log(e.target.dataset);
       // this.showroomidfromparent = event.target.dataset.showroomId;
    }

}