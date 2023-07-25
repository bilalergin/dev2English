@RestResource(urlMapping ='/Opportunity/*') //! Homework
global class OpportunityManager {
    @HttpGet
    global static Opportunity getCase() {
        RestRequest request = RestContext.request;
        String uri = request.requestURI;
        Id oppId =uri.substringAfterLast('/');
        Opportunity opp = [SELECT Name, Type, StageName, Amount, LeadSource FROM Opportunity WHERE id=:oppId];
        return opp;
    }

    @HttpPost    
    global static Id postOpportunity(Date CloseDate, String Name, String Type, String StageName, Decimal Amount, String LeadSource) {
        Opportunity opp = new Opportunity();
        opp.CloseDate = Date.today().addDays(20);
        opp.Name = Name;
        opp.Type = Type;
        opp.StageName = StageName;
        opp.Amount = Amount;
        opp.LeadSource = LeadSource;
        insert opp;
        return opp.id;
}
}