public class BingMapAPI {
    
    @InvocableMethod(label='Bing Map Api Call')
    public static void makeCallout(List<id> idList){
        try{
            verifyAddress(idList);
        }catch(Exception ex){
            system.debug('Error occured: '+ex);       
        }          
    }
     
    @Future(callout= true) 
    public static void verifyAddress(List<Id> idList){
        List<Contact> contactsToUpdate= new List<Contact>();
        
        for(id contactId : idList ){
            
            String apikey= System.Label.BingMapApiKey;
            String baseUrl= 'callout:BingMapBaseUrl';
            
            Contact contact=[select Id, MailingStreet, MailingCity, MailingState, MailingPostalCode,Address_Verified__c 
                             from Contact where id=:contactId with SECURITY_ENFORCED];
            
            String urlPath= '/Locations?'+
                'query='+ EncodingUtil.urlEncode(contact.MailingStreet,'UTF-8')+
                '+'+ contact.MailingCity +
                '+'+ contact.MailingState +
                '+'+ contact.MailingPostalCode +
                '&key='+apikey;
            Http http = new Http();
            HttpRequest request = new HttpRequest();
            request.setEndpoint(baseUrl+urlPath);
            request.setMethod('GET');
            HttpResponse response = http.send(request);
            if(response.getStatusCode() == 200) {
                // Deserialize the JSON string into collections of primitive data types.
                Map<String, Object> responseBodyMap = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
                List<Object> resourceSetsList = (List<Object>) responseBodyMap.get('resourceSets');
                Map<String, Object> resourceSetsMap  = (Map<String, Object>) resourceSetsList[0];
                List<Object> resourcesList =(List<Object>) resourceSetsMap.get('resources');
                Map<String, Object> resourcesMap  = (Map<String, Object>) resourcesList[0];
                String confidence =(String)resourcesMap.get('confidence');
                System.debug('confidence: '+confidence);
                if(confidence=='High'){
                    contact.Address_Verified__c= true;                   
                }else{
                    contact.Address_Verified__c= false;                  
                }
                contactsToUpdate.add(contact);
            }else{
                String errorMessage= 'Following Error occured during BingMapApi Callout: '+ response.getStatusCode() 
                    + ' '+response.getStatus();
                System.debug('errorMessage: '+errorMessage);
            }           
        }
        if(!contactsToUpdate.isEmpty()){
            update contactsToUpdate; 
        }
    }
}