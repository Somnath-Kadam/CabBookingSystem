import { LightningElement } from 'lwc';
import Cab_Reservation__c from '@salesforce/schema/Cab_Reservation__c';
import NAME from '@salesforce/schema/Cab_Reservation__c.Name';
import Customer_Name__c from '@salesforce/schema/Cab_Reservation__c.Customer_Name__c';
import 	Aadhar_Number__c from '@salesforce/schema/Cab_Reservation__c.Aadhar_Number__c';
import 	Customer_Email__c from '@salesforce/schema/Cab_Reservation__c.Customer_Email__c';
import 	Number_of_travelers__c from '@salesforce/schema/Cab_Reservation__c.Number_of_travelers__c';
import 	Vehicle__c from '@salesforce/schema/Cab_Reservation__c.Vehicle__c';
import 	Price_Per_Km__c from '@salesforce/schema/Cab_Reservation__c.Price_Per_Km__c';
import TRAVEL_DATE_TIME from '@salesforce/schema/Cab_Reservation__c.Travel_Date_Time__c';
import TRAVEL_FROM from '@salesforce/schema/Cab_Reservation__c.Travel_From__c';
import TRAVEL_TO from '@salesforce/schema/Cab_Reservation__c.Travel_To__c';
import Driver__c from '@salesforce/schema/Cab_Reservation__c.Driver__c';
import 	Driver_Email__c from '@salesforce/schema/Cab_Reservation__c.Driver_Email__c';

import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class CabReservation extends LightningElement {
    showmodel=false;
    recordId;
    objectApiName = Cab_Reservation__c;
    fields=[NAME,Customer_Name__c,Aadhar_Number__c,Customer_Email__c,Number_of_travelers__c,
      Vehicle__c,Price_Per_Km__c,
      TRAVEL_DATE_TIME,TRAVEL_FROM,TRAVEL_TO,Driver__c,	Driver_Email__c];
    handlesucess(event)
    {

        //this.recordId=event.detail.id;
        //console.log(this.recordId);
          this.recordId=event.detail.id;
        this.showmodel=true;
        
    }
    closemodel()// to modal popo-up
    {
        this.showmodel=false;
    }
    handlesubmit(event)
    { 
        const evt=new ShowToastEvent({
          title:'Success',
          message:'cab booked !!!!',
          variant:'success'
        });
        this.dispatchEvent(evt);

    }
}
