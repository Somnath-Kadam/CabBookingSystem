import { LightningElement } from 'lwc';
import validateCredentials from '@salesforce/apex/cabCustomerController.validateCredentials';
import { NavigationMixin } from 'lightning/navigation';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class LoginCab extends NavigationMixin(LightningElement)  {
    username='';
    password='';

    handleUsernameChange(event)
    {
        this.username=event.target.value;
    }

    handlePasswordChange(event)
    {
        this.password=event.target.value;
    }
    handleLogin()
    {
        validateCredentials({username:this.username,password:this.password})
        .then(result=>
        {
            if(result)
                {
                     
                    let cmpDef = {
                        componentDef: "c:cabWizard"
                    };
                    
                    let encodedDef = btoa(JSON.stringify(cmpDef));
                    
                    this[NavigationMixin.Navigate]({
                        type: "standard__webPage",
                        attributes: {
                            url: "/one/one.app#" + encodedDef
                        }
                    });
                    const toastEvent1=new ShowToastEvent({
                        title:'Sucess',
                        message:'WELCOME SuccessFull Login ',
                        variant:'success'
                    });
                    this.dispatchEvent(toastEvent1);
                }
                else
                {
                    console.log(result);
                    const toastEvent=new ShowToastEvent({
                        title:'Error',
                        message:'Invalid Your UserName And Password Check Again !!',
                        variant:'error'
                    });
                    this.dispatchEvent(toastEvent);
                }

        });
        


    }
}