//JSON Format
{
    "Name" : "Universal Containers",//! name,type ındustry.. :KEY, devamı ise value dur.
    "Type" : "New Customer",
    "Industry" : "Education",
    "AnnualRevenue" : 2000000
}

//UC1: Convert an account record into JSON format
Account acc = [SELECT Id, Name, Type, Industry, AnnualRevenue FROM Account WHERE Type != null AND Industry != null LIMIT 1];
System.debug(acc);
String jsonString = JSON.serialize(acc);
System.debug(jsonString);

//UC2: Convert 5 account records into JSON format
List<Account> acc = [SELECT Id, Name, Type, Industry, AnnualRevenue FROM Account WHERE Type != null AND Industry != null LIMIT 5];
System.debug(acc);
String jsonString = JSON.serialize(acc);
System.debug(jsonString);

//UC3: Convert a contact record into JSON format (FirstName, LastName, Email, Title, Department)
Contact con = [SELECT FirstName, LastName, Email, Title, Department FROM Contact WHERE Department != null LIMIT 1];
String jsonString = JSON.serialize(con);
System.debug(jsonString);

//UC4: Convert 5 contact records into JSON format
List<Contact> con = [SELECT FirstName, LastName, Email, Title, Department FROM Contact WHERE Department != null LIMIT 5];
String jsonString = JSON.serialize(con);
System.debug(jsonString);


//XML Format
<Account>
    <Name>Universal Containers</Name>
    <Type>New Customer</Type>
    <Industry>Education</Industry>
</Account>

//1. Prepare HttpRequest and wrap all the necessary information
HttpRequest request = new HttpRequest();
request.setEndpoint('');
request.setMethod('POST');
request.setBody('<json body>');
request.setHeader('Content-Type', 'application/json;charset=UTF-8');
request.setHeader('Authorization', 'Bearer dfe085965de938aa9fa71eb14785d23afc0043826a543bd8548a6f3a84da1a52');
