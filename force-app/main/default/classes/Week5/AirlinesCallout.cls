public with sharing class AirlinesCallout {
    public static HttpResponse getAirlines(Integer airlineId){
      //1. Prepare HttpRequest and wrap all the necessary data in it
      HttpRequest request = new HttpRequest();
      request.setEndpoint('https://api.instantwebtools.net/v1/airlines/1' + airlineId);
      request.setMethod('GET');
      //2. Prepare Internet //! org'dan remote site settings'den izin vermeliyiz.
      Http http = new Http();
      //3. Send the request over the Internet in order to receive the response
      HttpResponse response = http.send(request);
      //4. Process the response
      if(response.getStatusCode() == 200){
         String jsonString = response.getBody();
         

        //Convert to jsonString into sObject records
        AirlinesWrapper aw = (AirlinesWrapper)JSON.deserialize(jsonString, AirlinesWrapper.class);
        Airlines__c airline = new Airlines__c();
        airline.Airlines_Id__c = aw.id;
        airline.Name = aw.name;
        airline.Country__c = aw.country;
        airline.Logo_URL__c = aw.logo; 
        airline.Slogan__c = aw.slogan;
        airline.Head_Quaters__c = aw.head_quaters;
        airline.Website__c = aw.website;
        airline.Established__c = aw.established;
        
        //insert airlines
        try {
          insert airline;
        } catch (Exception exc) {
          System.debug(exc.getMessage());
        }
      

       }
       return response;
}
}