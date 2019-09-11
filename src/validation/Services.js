
import Api from '../ApiList';

export const UserExist= async(email)=>{
       
   const rawResponse=await fetch(Api.UserExist,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({EmailId:email})
      });
      const content= await rawResponse.json();
      return content;
      
}
export const getccUserData= async(data)=>{
       //{"userGUID": "","emailId": email};
    const rawResponse=await fetch(Api.ccgetUserData,{
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
       });
       const content= await rawResponse.json();
       return content;
       
 }
 export const mobileOTP= async(data)=>{
       
    const rawResponse=await fetch(Api.sendMobileOtp,{
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
       });
       const content= await rawResponse.json();
       return content;
       
 }
 export const SignIn= async(data)=>{
       
    const rawResponse=await fetch(Api.SignIn,{
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
       });
       const content= await rawResponse.json();
       return content;
       
 }
 export const SignUp= async(data)=>{
       
    const rawResponse=await fetch(Api.SignUp,{
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
       });
       const content= await rawResponse.json();
       return content;
       
 }

//  getPincodeCityMapping
export const getPincodeCityMapping= async(data)=>{
       
  const rawResponse=await fetch(Api.getPincodeCityMapping,{
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
     });
     const content= await rawResponse.json();
     return content;
     
}
 export const saveForm1= async(data)=>{
       
    const rawResponse=await fetch(Api.saveForm1,{
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
       });
       const content= await rawResponse.json();
       return content;
       
 }
 export const saveForm2= async(data)=>{
       
  const rawResponse=await fetch(Api.saveForm2,{
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
     });
     const content= await rawResponse.json();
     return content;
     
}
export const saveForm3= async(data)=>{
       
  const rawResponse=await fetch(Api.saveForm3,{
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
     });
     const content= await rawResponse.json();
     return content;
     
}

export const callBankApi= async(data)=>{
       
  const rawResponse=await fetch(Api.callBankApi,{
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
     });
     const content= await rawResponse.json();
     return content;
     
}

 