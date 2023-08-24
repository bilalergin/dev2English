public with sharing class CarCtrl {
    @AuraEnabled(cacheable=true)
    public static List<Car__c> getCars(String type) {
        if (type == 'All') {
            return [SELECT Id, Name, Category__c, Control__c, Description__c, Fuel_Type__c, Make__c, Picture_URL__c, Price__c, Seating_Capacity__c 
            FROM Car__c 
            WITH SECURITY_ENFORCED];
            
        }else{
            return [SELECT Id, Name, Category__c, Control__c, Description__c, Fuel_Type__c, Make__c, Picture_URL__c, Price__c, Seating_Capacity__c 
            FROM Car__c 
            WHERE Category__c = : type
            WITH SECURITY_ENFORCED];
        }
       
        
    }
}