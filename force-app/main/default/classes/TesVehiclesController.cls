public with sharing class TesVehiclesController {
    @AuraEnabled(cacheable=true)
     public static List<Vehicle__c> getVehicleList(){
         return [SELECT Id, Name, Model__C, Price__c, Showroom_Name__c, Interested__c 
         FROM Vehicle__c 
         LIMIT 10];
     }
 }