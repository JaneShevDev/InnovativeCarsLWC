public with sharing class VehiclesController {

@AuraEnabled(cacheable=true)
public static List<Vehicle__c> findVehicleByShowroomId(String showroomId) {
 List<Vehicle__c> vehicleList = 
    [SELECT Id, Name, Model__C, Price__c, Showroom_Name__c, Interested__c
    FROM Vehicle__c
    WHERE Showroom_Name__c =:showroomId
    WITH SECURITY_ENFORCED

    LIMIT 10];

    return vehicleList;
}
}