@isTest
public with sharing class RestCalloutMock implements HttpCalloutMock {
    public HttpResponse respond(HttpRequest request) {
        //get animals mock
        if(request.getEndpoint() == 'https://th-apex-http-callout.herokuapp.com/animals' && request.getMethod() == 'GET') {
            HttpResponse response = new HttpResponse();
            response.setStatus('OK');
            response.setStatusCode(200);
            String body = '{"animals":["majestic badger","fluffy bunny","scary bear","chicken"]}';
            response.setBody(body);
            return response;
        }
        return null;
    }
}