@isTest
public class CalculatorAddTest {
    @isTest
    private static void addTest() {
        Test.startTest();
        //1. Set mock
        CalculatorAddMock mock = new CalculatorAddMock();
        Test.setMock(WebServiceMock.class, mock);

        //2. Call the method
        Double result = SoapCallouts.add(5, 6);

        //3. Perform asserts
        Assert.areEqual(11, result);
        Test.stopTest();
    }
}