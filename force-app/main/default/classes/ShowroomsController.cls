public with sharing class ShowroomsController {
    
    public String showroomId{get;set;}
    public Showroom__c shObj{get;set;}
    public ShowroomsController() {
        shObj = new Showroom__c();
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Showroom__c> findShowroomByAccountId(String accountId) {      
        return [
            SELECT Id, Name
            FROM Showroom__c 
            WHERE Account__c=:accountId 
            WITH SECURITY_ENFORCED

            LIMIT 10];
    }
   
    public pageReference retrieveShowroomDetail(){
        if(showroomId!=null){
             shObj = [select id,name from Showroom__c where id=:showroomId];
            
        }       
		return null;        
    }
}