public with sharing class PostProduct {
   //Endpoint: https://dummyjson.com/products/add
    //Http Method: POST
    public static HttpResponse postProduct(Id prodId) {
        //1. Prepare HttpRequest and wrap all the necessary data in it
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://dummyjson.com/products/add');
        request.setMethod('POST');
        //prepare json body
        Ecommerce_Product__c ep = [SELECT Name, Brand__c, Category__c, Description__c, Discount_Percentage__c, Price__c, Rating__c, 
                                    Stock__c, Thumbnail__c, Product_Id__c
                                    FROM Ecommerce_Product__c 
                                    WHERE Id = :prodId];
        EcommerceProductWrapper.ProductWrapper pw = new EcommerceProductWrapper.ProductWrapper();//ecommerce wrapperın sadece productWrapperına ihtiyacımız var. onun için inner yaptık
        pw.brand = ep.Brand__c;
        pw.category = ep.Category__c;
        pw.description = ep.Description__c;
        pw.discountPercentage = ep.Discount_Percentage__c;
        pw.price = Integer.valueOf(ep.Price__c);
        pw.rating = ep.Rating__c;
        pw.stock = Integer.valueOf(ep.Stock__c);
        pw.thumbnail = ep.Thumbnail__c;
        pw.title = ep.Name;
        String body = JSON.serialize(pw);
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
            EcommerceProductWrapper.ProductWrapper pwNew = (EcommerceProductWrapper.ProductWrapper)JSON.deserialize(jsonString, EcommerceProductWrapper.ProductWrapper.class);
            ep.Product_Id__c = pwNew.id;
            update ep;
        }
        return response;
    }

}