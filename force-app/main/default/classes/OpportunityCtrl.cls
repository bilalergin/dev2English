public with sharing class OpportunityCtrl {
        //15.08.2023
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getTopOpportunities() {
        return [SELECT Id, Name, Amount, Type, StageName
        FROM Opportunity
        WHERE Amount != null
        ORDER BY Amount 
        LIMIT 5];
    }
}