


export const nameVali=(name)=>{
    //console.log(name)
    let isvalid=true;
    let msg="";
    if(name===""){
        isvalid=false;
        msg="Please enter name";
    }else if(name.length<3 || name.length>=60){
        isvalid=false;
        msg="Please enter valid  (minimum 3 characters)";
    }else if(!/^[a-zA-Z ']+$/.test(name)){
        isvalid=false;
        msg="Please enter  name";
      
    }else{
        isvalid=true;
        msg=""; 
    }  
    let res={
        status:isvalid,
        message:msg
    };
    return res
}

export const Mnamevalidation=(Mname)=>{
    let isvalid=true;
    let msg="";
    if(Mname.length!==0){
        if(Mname.length<3 || Mname.length>=60){
            isvalid=false;
            msg="Please enter valid  (minimum 3 characters)";
        }
    }else{
        isvalid=true;
        msg=""; 
    }
    let res={
        status:isvalid,
        message:msg
    };
    return res

}


export const mobilenumber=(mobilenumber)=>{
    let isvalid=true;
    let msg="";
    if(mobilenumber===""){
        isvalid=false;
        msg="Please enter mobile number";
    }else if(mobilenumber.length!==10){
        isvalid=false;
        msg="Please enter ten digit of mobile number";
    }else if(/^[0-9\b]+$/.test(mobilenumber)===false){
        isvalid=false;
        msg="character not allowed ";
    }else if(parseInt(mobilenumber)<5000000000){
        isvalid=false;
        msg="Please valid mobile number";
    }else{
        isvalid=true;
        msg="";
    }
    let res={
        status:isvalid,
        message:msg
    }
    return res;
}

export const panValidation=(pan)=>{
    let isvalid=true;
    let msg="";
    if(pan===""){
        isvalid=false;
        msg="Please enter PAN No";
    }else if(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(pan)===false){
        isvalid=false;
        msg="Please enter proper PAN NO";
    }else{
        isvalid=true;
        msg="";
    }
    let res={
        status:isvalid,
        message:msg
    }
    return res;
}

export const mobileotp=(mobileotp)=>{
    
    let isvalid=true;
    let msg="";
    if(mobileotp===""){
        isvalid=false;
        msg="Please enter mobile OTP";
    }
    else if(/^[0-9\b]+$/.test(mobileotp)===false){
        isvalid=false;
        msg="Charcter not allowed";
    }else{
        isvalid=true;
        msg="";
    }
    var res={
        status:isvalid,
        message:msg
    }
    return res;

}


export const emailcheck=(email)=>{
    var isvalid=true;
    var msg="";
   
    if(email===""){
        isvalid=false;
        msg="Please enter email id";
    }
    else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)===false){
        isvalid = false;
        msg = "Please enter valid email id";
       
    }else{
        isvalid=true;
        msg="";
    } 

    var returnemail={
        message:msg,
        status:isvalid
       
    }
    return returnemail;
}


export const pincodeVali=(data)=>{
    let msg="";
    let isValid=true;
    if(data===""){
        msg="Enter pincode";
        isValid=false;
    }else if(data.length<6){
        msg="Enter six digit";
        isValid=false;
    }
    else{
        msg="";
        isValid=true;
        
    }
    let res={
        message:msg,
        response:isValid
    }
    return res;
}
export const incomeVali=(income)=>{
    let msg="";
    let isValid=true;
    if(income===""){
        msg="Enter income";
        isValid=false;
    }else if(income<20000){
        msg="income Minimum 20000";
        isValid=false;
    }
    else{
        msg="";
        isValid=true;
        
    }
    let res={
        message:msg,
        response:isValid
    }
    return res;
}

export const dobValid=(agedata)=>{
    //console.log(agedata);
    var agesplite=agedata.split("-");
    
    
    let data20= new Date(parseInt(agesplite[2])+20,parseInt(agesplite[1])-1,parseInt(agesplite[0])) <= new Date();
    
   

    let msg="";
    let isValid=true;
    if(agedata===""){
        msg="Enter DOB";
        isValid=false;
    }else if(data20===false){
        msg="minimum age should be 20 year";
        isValid=false;
    }
    else{
        msg="";
        isValid=true;
        
    }
    let res={
        message:msg,
        response:isValid
    }
    return res;
}
export const addressCheck=(addressData)=>{
    let isvalid=true;
    let msg="";
    if(addressData===""){
        isvalid=false;
        msg="Please enter address)";
    }
    else if(/^[a-zA-Z0-9 \.]*$/.test(addressData)===false){
        isvalid=false;
        msg="Please enter valid  address";
    }
    else if(addressData.length<5 || addressData.length>=200){
        isvalid=false;
        msg="Please enter valid  (minimum 5 characters)";

    }else{
        isvalid=true;
        msg=""; 
    }
    let res={
        status:isvalid,
        message:msg
    };
    return res

}