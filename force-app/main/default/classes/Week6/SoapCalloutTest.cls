@isTest
public with sharing class SoapCalloutTest {
    
    @isTest
    private static void getParksByCountryTest() {
        Test.startTest();
        //1. Set mock
        ParksServiceMock mock = new ParksServiceMock();
        Test.setMock(WebServiceMock.class, mock);

        //2. Call the method
        List<String> parks = SoapCallouts.getParksByCountry('Turkiye');

        //3. Perform asserts
        Assert.areEqual(3, parks.size());
        Test.stopTest();
    }

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