@isTest
public class ToDoTriggerTest {
@isTest
    // Test senaryosu için ToDo kayıtları oluşturun
   private static void createToDoRecords() {
        List<ToDo__c> toDos = new List<ToDo__c>();
        for (Integer i = 0; i < 5; i++) {
            ToDo__c toDo = new ToDo__c(Name = 'Test ToDo ' + i);
            toDos.add(toDo);
        }
        insert toDos;
    }

    // ToDo eklemesi için tetikleyiciyi test edin
    @isTest
    private static void testToDoInsertTrigger() {
        Test.startTest();
        createToDoRecords(); // ToDo kayıtlarını oluşturun
        Test.stopTest();

        // ToDoHandler.afterInsert yöntemini çağırmış mı kontrol edin ve sonuçları test edin
        // Örnek: assert(...);
    }

    // ToDo güncellemesi için tetikleyiciyi test edin
    @isTest
    private static void testToDoUpdateTrigger() {
        Test.startTest();
        createToDoRecords(); // ToDo kayıtlarını oluşturun
        // ToDo kayıtlarını güncelleyin
        // Örnek: List<ToDo__c> toDosToUpdate = [SELECT Id FROM ToDo__c LIMIT 5];
        // for (ToDo__c toDo : toDosToUpdate) {
        //     // Güncelleme işlemi
        // }
        // update toDosToUpdate;
        Test.stopTest();

        // ToDoHandler.afterUpdate yöntemini çağırmış mı kontrol edin ve sonuçları test edin
        // Örnek: assert(...);
    }

    // ToDo silmesi için tetikleyiciyi test edin
    @isTest
    private static void testToDoDeleteTrigger() {
        Test.startTest();
        createToDoRecords(); // ToDo kayıtlarını oluşturun
        // ToDo kayıtlarını silin
        // Örnek: List<ToDo__c> toDosToDelete = [SELECT Id FROM ToDo__c LIMIT 5];
        // delete toDosToDelete;
        Test.stopTest();

        // ToDoHandler.afterDelete yöntemini çağırmış mı kontrol edin ve sonuçları test edin
        // Örnek: assert(...);
    }
}
