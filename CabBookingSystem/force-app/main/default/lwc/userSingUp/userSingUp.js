import { LightningElement,track } from 'lwc';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';
import{NavigationMixin} from 'lightning/navigation';

export default class UserSingUp extends NavigationMixin(LightningElement) 
{
    @ track showForm=false;
    handleSignUp()
    {
        this.showForm=true;
    }
    handleSuccess(event)
    {
        event.preventDefault();
       const toastEvent=new ShowToastEvent({
        title:'Success',
        message:'Sign Up Sucessfully!! Welcome to Premium Cab Services',
        variant:'success'
       });
       this.dispatchEvent(toastEvent);
       let cmpDef={
        componentDef:"c:loginCab"

       };
       let encodeDef=btoa(JSON.stringify(cmpDef));
       this[NavigationMixin.Navigate]
       ({
        type:"standard__webPage",
        attributes:{
            url:"one/one.app#"+encodeDef
        }
       });

    }
    handleSubmit()
    {
        let cmpDef={
            componentDef:"c:loginCab"
    
           };
           let encodeDef=btoa(JSON.stringify(cmpDef));
           this[NavigationMixin.Navigate]
           ({
            type:"standard__webPage",
            attributes:{
                url:"one/one.app#"+encodeDef
            }
           });

    }
    
}