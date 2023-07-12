public with sharing class RestCallouts {
   //Endpoint : https://th-apex-http-callout.herokuapp.com/animals
   public static HttpResponse getAnimals(){
        //1. Prepare HttpRequest and wrap all the necessary data in it
        //1. HttpRequest'i hazırlayın ve gerekli tüm verileri içine sarın
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals');  //! org'dan remote site settings'den izin vermeliyiz.
        request.setMethod('GET');//! her zaman büyük harf olacak

        //2. Prepare Internet
        //2. İnterneti hazırlayın
        Http http = new Http();

        //3. Send the request over the Internet in order to receive the response
        //3. Yanıtı almak için isteği İnternet üzerinden gönderin
        HttpResponse response = http.send(request);

        //4. Process the response
        //4. Yanıtı işle
        System.debug(response.getStatus());
        System.debug(response.getStatusCode());
        System.debug(response.getBody());
        return response;
   }

   // Endpoint: https://dummyjson.com/products
   // Http Method: GET
   public static HttpResponse getProducts(){
      //1. Prepare HttpRequest and wrap all the necessary data in it
      HttpRequest request = new HttpRequest();
      request.setEndpoint('https://dummyjson.com/products');
      request.setMethod('GET');
      //2. Prepare Internet //! org'dan remote site settings'den izin vermeliyiz.
      Http http = new Http();
      //3. Send the request over the Internet in order to receive the response
      HttpResponse response = http.send(request);
      //4. Process the response
      if(response.getStatusCode() == 200){
         String jsonString = response.getBody();
         //System.debug(jsonString);

         //Convert to jsonString into sObject records
         //! ctr+shift+p ye bas,yukarıya refresh yaz ve refresh sobject definitions ı seç. Sonra custom sobjecte tıkla ve objenin fieldları otomatik gelsin
         EcommerceProductWrapper epw = (EcommerceProductWrapper)JSON.deserialize(jsonString, EcommerceProductWrapper.class);
            List<EcommerceProductWrapper.ProductWrapper> pws = epw.products;
            List<Ecommerce_Product__c> products = new List<Ecommerce_Product__c>();
            for(EcommerceProductWrapper.ProductWrapper pw : pws) {
                Ecommerce_Product__c ep = new Ecommerce_Product__c();
                ep.Product_Id__c = pw.id;
                ep.Name = pw.title;
                ep.Description__c = pw.description;
                ep.Price__c = pw.price;
                ep.Discount_Percentage__c = pw.discountPercentage;
                ep.Rating__c = pw.rating;
                ep.Stock__c = pw.stock;
                ep.Brand__c = pw.brand;
                ep.Category__c = pw.category;
                ep.Thumbnail__c = pw.thumbnail;
                products.add(ep);
            }
            //insert records
            try {
                insert products;
            } catch(Exception ex) {
                System.debug(ex.getMessage());
            }
        }
        return response;
    }

}