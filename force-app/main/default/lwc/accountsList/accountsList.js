import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountsController.getAccounts';
export default class AccountsList extends LightningElement {
    @wire(getAccounts) accounts;
    accountidfromparent;
    handleClick(event){
        event.preventDefault();     
        this.accountidfromparent = event.target.dataset.accountid;
    }
}