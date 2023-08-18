public with sharing class AccountCtrl {
    //15.08.2023
    @AuraEnabled(cacheable=true)
    public static List<Account> getTopAccounts() {
        return [SELECT Id, Name, Type, Industry, AnnualRevenue
        FROM Account
        WHERE AnnualRevenue != null
        ORDER BY AnnualRevenue DESC
        LIMIT 5];
    }
    
    @AuraEnabled(cacheable=true) //wire ile yazınca cacheable ı yazmak zorundayız. wire sız çağırınca yazmasak da olur
    public static List<Account> getTopAccountsByType(String type) {
        return [SELECT Id, Name, Type, Industry, AnnualRevenue
        FROM Account
        WHERE AnnualRevenue != null
        AND Type =:type
        ORDER BY AnnualRevenue DESC
        LIMIT 5];
    }
}