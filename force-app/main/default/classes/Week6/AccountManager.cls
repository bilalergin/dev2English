@RestResource(urlMapping = '/Account/*')
global with sharing class AccountManager {
    //https://dev2-a-dev-ed.develop.my.salesforce.com/services/apexrest/Account/{accId}
    //https://dev2-a-dev-ed.develop.my.salesforce.com/services/apexrest/Account/001Hu00002uZOXCIA4
    //pars etmek üstteki urldeki idyi ayrıştırmak
   
    @HttpGet
    global static Account getAccount() {
//RestResource Apexte @HttpPost,@HttpGet,@HttpPut,@HttpDelete,@HttpPatch annotationlarının içinde sadece 1 tane metot yazabiliriz. 
        //Grab(yakalamak) the account id from the url, query(sorgu) for the same and return the data
        RestRequest request = RestContext.request;
        String endpoint = request.requestURI;
        Integer lastIndex = endpoint.lastIndexOf('/');//Pars etmek son slaştan sonrasını al demek.
        String accId = endpoint.substring(lastIndex + 1);
        if (accId.length() == 18 || accId.length() ==15){//classicte id 15 karakter
            Account acc = [SELECT id, name, Type, Industry, AnnualRevenue, Phone, Website FROM Account WHERE Id = :accId];
            return acc;
            
        }
        return null;
    }
    @HttpPost        
    
//RestResource Apexte @HttpPost,@HttpGet,@HttpPut,@HttpDelete,@HttpPatch annotationlarının içinde sadece 1 tane metot yazabiliriz. 
    global static Id postAccount(String Name, String Type, String Industry, Integer AnnualRevenue, String Phone, String Website) {
        Account acc = new Account();
        acc.Name = Name;
        acc.Type = Type;
        acc.Industry = Industry;
        acc.AnnualRevenue = AnnualRevenue;
        acc.Phone = Phone;
        acc.Website = Website;
        insert acc;
        return acc.Id;
        
    }
    //RestResource Apexte @HttpPost,@HttpGet,@HttpPut,@HttpDelete,@HttpPatch annotationlarının içinde sadece 1 tane metot yazabiliriz. 
    @HttpDelete
    global static String deleteAccount() {
        RestRequest request = RestContext.request;
        String endpoint = request.requestURI;
        Integer lastIndex = endpoint.lastIndexOf('/');
        String accId = endpoint.substring(lastIndex + 1);
        if (accId.length() == 18 || accId.length() ==15){//classicte id 15 karakter
            Account acc = [SELECT Id FROM Account WHERE Id = :accId]; 
            try {
                delete acc;
                return 'Success';
            } catch (Exception ex) {
                return 'Fail';
            }

    }
    return 'Fail';
    }
    //RestResource Apexte @HttpPost,@HttpGet,@HttpPut,@HttpDelete,@HttpPatch annotationlarının içinde sadece 1 tane metot yazabiliriz. 
    @HttpPut
    global static Account putAccount() {
        //Grab the request body and upsert the same
        RestRequest request = RestContext.request;
        String jsonString = request.requestBody.toString();//blob stringe çevir demek
        Account acc= (Account)JSON.deserialize(jsonString, Account.class);
        upsert acc;//insert if there is no id in the json, else updates
        return [SELECT id, name, Type, Industry, AnnualRevenue, Phone, Website FROM Account WHERE Id = :acc.Id LIMIT 1];
        
    
    }
    @HttpPatch
    global static Account patchAccount() {//sadece belli fieldlar update edilir
        //Grab the request body  and convert it to account
        RestRequest request = RestContext.request;
        String jsonString = request.requestBody.toString();
        Map<String, Object> info = (Map<String, Object>)JSON.deserializeUntyped(jsonString);//Tüm fieldları update etmediğimiz için deserializeUntyped ı kullandık
        Account acc= new Account();
        for (String key : info.keySet()) {
            acc.put(key, info.get(key));
            
        }
        update acc;
        return [SELECT id, name, Type, Industry, AnnualRevenue, Phone, Website FROM Account WHERE Id = :acc.Id LIMIT 1];

    }

}