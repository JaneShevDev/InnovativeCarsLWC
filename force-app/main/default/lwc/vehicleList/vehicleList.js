import { LightningElement, api, wire } from 'lwc';
import findVehicleByShowroomId from '@salesforce/apex/VehiclesController.findVehicleByShowroomId';

export default class VehicleList extends LightningElement {
    
    columns =  [
        { label: 'Name', fieldName: 'Name', type:'text' },
        { label: 'Interested', fieldName: 'Interested', type:'Checkbox' },  
   ];

    @api showroomId;
    @wire(findVehicleByShowroomId,{showroomId:'$showroomId'}) vehicles;
    
}