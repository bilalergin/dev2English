public with sharing class OpportunityCtrl2 {
        //16.08.2023

    @AuraEnabled
    public static List<Opportunity> getOppsByStage(String stage) {
        return [SELECT Id, Name, Type, StageName, Amount
        FROM Opportunity
        WHERE StageName = :stage
        WITH SECURITY_ENFORCED];
    }
}