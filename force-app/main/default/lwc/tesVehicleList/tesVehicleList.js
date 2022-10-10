import { LightningElement, wire } from 'lwc';
import getVehicleList from '@salesforce/apex/TesVehiclesController.getVehicleList';
import {updateRecord} from 'lightning/uiRecordApi'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex'
const columns = [
    { label: 'Name', fieldName: 'Name', type:'text' },
    { label: 'Model', fieldName: 'Model__c', type:'text' },
    { label: 'Price', fieldName: 'Price__c', type:'currency' },
    { label: 'Interested', fieldName: 'Interested__c', type:'boolean', editable: true }
]
export default class tesVehicleList extends LightningElement {
    columns = columns
    draftValues = []
    @wire(getVehicleList)
    vehicles;

    handleSave(event){
        console.log(event.detail.draftValues)
        const recordInputs = event.detail.draftValues.slice().map(draft=>{
            const fields = Object.assign({}, draft)
            return {fields}
        })
        console.log("recordInputs", recordInputs)

        const promises = recordInputs.map(recordInput => updateRecord(recordInput))
        Promise.all(promises).then(result=>{
            this.showToastMsg('Success', 'Vehicle updated')
            this.draftValues=[]
            return refreshApex(this.vehicles)
        }).catch(error=>{
            this.showToastMsg('Error creating record', error.body.message, error)
        })
    }
    showToastMsg(title, message, variant){
        this.dispatchEvent(
            new ShowToastEvent({
                title:title,
                message:message,
                variant:variant||'success'
            })
        )
    }
}