
public with sharing class cabCustomerController {
    public cabCustomerController() {

    }
    @AuraEnabled(cacheable=true)
    public static Boolean validateCredentials(String username,String password)
    {
        boolean result;
        if(username==null || password==null)
        {
            result=false;
        }
       List<Cab_Customer__c> listCab=[select Id,User_Name__c,Password__c from Cab_Customer__c Where User_Name__c =:username Limit 1 ];
       if(listCab.size()==0)
       {
        result=false;
       }
       else
       {
        if(listCab[0].Password__c==password)
        {
            result=true;
        }
        else
        {
        result=false;
        }
       }
       return result;
    }
}