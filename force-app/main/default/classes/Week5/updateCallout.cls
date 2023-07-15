public class updateCallout {

        //Endpoint: https://dummyjson.com/todos/{id}
        //Http Method: PUT
        @future(callout=true)
        public static void updateToDo(Id toDoId) {
            ToDo__c todo = [SELECT Name, ToDo_Id__c, User_Id__c, Completed__c FROM ToDo__c WHERE Id = :toDoId LIMIT 1];
        //1. Prepare HttpRequest and wrap all the necessary data in it
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://dummyjson.com/todos/'+todo.ToDo_Id__c);
        request.setMethod('PUT');
        String body = '{"completed":' + todo.Completed__c + '}';
        System.debug(body);
        request.setBody(body);
        request.setHeader('Content-Type', 'application/json');
    
            //2. Prepare Internet
            Http http = new Http();
    
            //3. Send the request over the internet in order to receive the response
            HttpResponse response = http.send(request);
    
            //4. Process the response
            if(response.getStatusCode() == 200) {
                System.debug('Data has been sent!');
            } else {
                System.debug(response.getStatusCode());
            }
        }
    
    }