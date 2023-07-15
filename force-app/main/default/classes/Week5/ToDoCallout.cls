public class ToDoCallout {
   
//Endpoint: https://dummyjson.com/todos/add
    //Http Method: POST
    @future(callout=true)
    public static void postToDo(Id toDoId) {
        //1. Prepare HttpRequest and wrap all the necessary data in it
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://dummyjson.com/todos/add');
        request.setMethod('POST');
        ToDo__c todo = [SELECT Name, ToDo_Id__c, User_Id__c, Completed__c FROM ToDo__c WHERE Id = :toDoId LIMIT 1];
        ToDoWrapper tw = new ToDoWrapper();
        tw.completed = todo.Completed__c;
        tw.todo = todo.Name;
        tw.userId = Integer.valueOf(todo.User_Id__c);//from sağ to left dönüştürmede. sol taraf integer sağ taraf decimal. decimLI İntegera çevirdik

        String body = JSON.serialize(tw);
        request.setBody(body);
        request.setHeader('Content-Type', 'application/json');

        //2. Prepare Internet
        Http http = new Http();

        //3. Send the request over the internet in order to receive the response
        HttpResponse response = http.send(request);

        //4. Process the response
        System.debug(response.getStatusCode());
        if(response.getStatusCode() == 200 || response.getStatusCode() == 201) {
            String jsonString = response.getBody();
            ToDoWrapper newWrap = (ToDoWrapper)JSON.deserialize(jsonString, ToDoWrapper.class);
            todo.ToDo_Id__c = newWrap.id;
            update todo;
        }
    }

}

