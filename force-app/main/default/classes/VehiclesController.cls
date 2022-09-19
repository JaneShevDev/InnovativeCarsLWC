public with sharing class VehiclesController {

    @AuraEnabled(cacheable=true)
    public static List<Vehicle__c> findVehicleByShowroomId(String showroomId) {      
    return [
    
        SELECT Id, Name, Interested__c
        FROM Vehicle__c 
        WHERE Showroom_Name__c=:showroomId
        WITH SECURITY_ENFORCED

        LIMIT 10];
        
}
}