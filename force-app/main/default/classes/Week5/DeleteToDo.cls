public with sharing class DeleteToDo {
    //Endpoint: https://dummyjson.com/todos/{id}
    //Http Method: DELETE
    @future(callout=true)
    public static void deleteToDo(Integer toDoId) {
        //1. Prepare HttpRequest and wrap all the necessary data in it
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://dummyjson.com/todos/' + toDoId);
        request.setMethod('DELETE');

        //2. Prepare Internet
        Http http = new Http();

        //3. Send the request over the internet in order to receive the response
        HttpResponse response = http.send(request);
        
        //4. Process the response
        System.debug(response.getStatusCode());
    }

}