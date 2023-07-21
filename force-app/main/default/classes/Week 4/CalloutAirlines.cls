public with sharing class CalloutAirlines {
    public static HttpResponse getAirlines(){
      //1. Prepare HttpRequest and wrap all the necessary data in it
      HttpRequest request = new HttpRequest();
      request.setEndpoint('https://api.instantwebtools.net/v1/airlines');
      request.setMethod('GET');
      //2. Prepare Internet //! org'dan remote site settings'den izin vermeliyiz.
      Http http = new Http();
      //3. Send the request over the Internet in order to receive the response
      HttpResponse response = http.send(request);
      //4. Process the response
      if(response.getStatusCode() == 200){
         String jsonString = response.getBody();
         System.debug(jsonString);
       }
       return response;
}
}