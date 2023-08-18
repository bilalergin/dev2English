public with sharing class ContactCtrl {
       //16.08.2023

    @AuraEnabled
    public static List<Contact> searchContacts(String searchKey) {
        searchKey = '%' + searchKey + '%';
        return [SELECT Id, Name, Title, Department, Email 
        FROM Contact
        WHERE Name LIKE : searchKey
        WITH SECURITY_ENFORCED];
    }
}