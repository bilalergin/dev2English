public with sharing class ToDoHandler {
    public static void afterInsert(Map<Id, ToDo__c> newToDos ) {
        for (Id toDoId : newToDos.keyset()) {
            ToDoCallout.postToDo(toDoId);
            
        }
        
    }
}