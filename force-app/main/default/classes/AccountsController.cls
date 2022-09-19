public with sharing class AccountsController {
    public String accountId{get;set;}
    public Account actObj{get;set;}
    public AccountsController() {
        actObj = new Account();
    }  
    @AuraEnabled(cacheable=true)    
    public static List<Account> getAccounts(){
        return [select id, name from Account limit 10];
    }
    @AuraEnabled
    public static List<Account> getAccountList(){
        return [select id, name from Account limit 10];
    }
    public pageReference retrieveAccountDetail(){
        if(accountId!=null){
             actObj = [select id,name from Account where id=:accountId];
            
        }       
		return null;        
    }
}