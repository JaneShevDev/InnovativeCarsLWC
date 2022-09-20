import { LightningElement, api, wire } from 'lwc';
import findVehicleByShowroomId from '@salesforce/apex/VehiclesController.findVehicleByShowroomId';

export default class VehicleList extends LightningElement {
    
    columns =  [
        { label: 'Name', fieldName: 'Name', type:'text' },
        { label: 'Model', fieldName: 'Model', type:'text' },
        { label: 'Price', fieldName: 'Price', type:'currency' },  
   ];

    @api showroomId;
    @wire(findVehicleByShowroomId,{showroomId:'$showroomId'}) vehicles;

}