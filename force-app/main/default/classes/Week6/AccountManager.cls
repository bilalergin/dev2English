@RestResource(urlMapping = '/Account/*')
global with sharing class AccountManager {
    //https://dev2-a-dev-ed.develop.my.salesforce.com/services/apexrest/Account/{accId}
    //https://dev2-a-dev-ed.develop.my.salesforce.com/services/apexrest/Account/001Hu00002uZOXCIA4
   
    @HttpGet
    global static Account getAccount() {
        //Grab(yakalamak) the account id from the url, query(sorgu) for the same and return the data
        RestRequest request = RestContext.request;
        String endpoint = request.requestURI;
    }
}