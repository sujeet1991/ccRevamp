import React,{Component} from 'react';
import Aux from '../../HOC/aux';
import { detect } from 'detect-browser';
import BodyWrapper from '../../HOC/container';
import ChangeCart from '../../component/ChangeCard/changeCard';
import TabList from '../../component/TabList/tabList';
import Basic from './Basic';
import Error from '../Error';
import {nameVali,Mnamevalidation,panValidation,emailcheck,mobilenumber,dobValid,mobileotp} from '../../validation/validation';
import {UserExist,getccUserData,mobileOTP,SignIn,SignUp,saveForm1} from '../../validation/Services';
import './BankDetail.css';
const browser = detect();
//let getPageUrl=window.location.href;
let getPageUrl='https://www.myuniverse.in/creditcards/';

class BankDetailBasic extends Component{
    constructor(props){
        super(props);
        this.ref = React.createRef();
        //ref1['email'] = React.createRef();
        
        this.state={
            UserInfo:{
                Fname:"",
                Mname:"",
                Lname:"",
                panNO:"",
                EmailId:'',
                MobileNo:"",
                MobileOTP:'',
                DOB:'',
                gender:'2' // 2 male 3 female
            },
            Hdfc:{
                relation:'0', // 0 no 1 yes
                HdfcAc:''
            },
            otpcom:true,
            errors:{},
            userExist:"",
            otpRes:false,
            ccUserData:"",
            getUserData:null,
            UserGUID:"",
            bankData:{}

        }
    }

    UNSAFE_componentWillMount(){
        let bankData= JSON.parse(window.sessionStorage.getItem("Detail"));
        if(bankData!==null){
            //console.log(bankData);
            this.setState({bankData:bankData})
        }else{
            this.props.history.push("/Offerpage");
        }
        
    }
    onChangeHandler=(e)=>{
        //console.log(e.target.name);
        let UserInfo=this.state.UserInfo;
        let Hdfc=this.state.Hdfc;
        if(e.target.name==='Fname' || e.target.name==="Mname" || e.target.name==="Lname"){
            if(e.target.value===""||/^[a-zA-Z ]+$/.test(e.target.value)){
                UserInfo[e.target.name]=e.target.value;
            }
        }else if(e.target.name==='MobileNo' || e.target.name==="MobileOTP" ||e.target.name==='HdfcAc'){
            if(e.target.value===""||/^[0-9\b]+$/.test(e.target.value)){
                UserInfo[e.target.name]=e.target.value;
                Hdfc[e.target.name]=e.target.value;
            }
           
        }else{
            UserInfo[e.target.name]=e.target.value;
            Hdfc[e.target.name]=e.target.value;
        }
        
        this.setState({UserInfo,Hdfc});
        
    }
    FnameBlur=(e,name)=>{
        //this.refs.email.setAttribute("disabled", true);
        let error=this.state.errors;
        //let isvalid=false;
        let ValidName=nameVali(name);
        if(ValidName.status===false){
            //isvalid=false;
            error["Fname"]=ValidName.message
            
        }else{
            //isvalid=true
            error["Fname"]=ValidName.message
        }
        this.setState(prevState=>({
            errors:prevState.errors,error
        }));
         return ValidName.status;
       
    }
    LnameBlur=(e,name)=>{
        let error=this.state.errors;
        let ValidName=nameVali(name);
        if(ValidName.status===false){
            error["Lname"]=ValidName.message
            
        }else{
            error["Lname"]=ValidName.message
        }
        
        this.setState(prevState=>({
            errors:prevState.errors,error
        }))
        return ValidName.status;
       
    }
    MnameBlur=(e,name)=>{
        let error=this.state.errors;
        let Mname=Mnamevalidation(name);
        if(Mname.status===false){
            error["Mname"]=Mname.message
        }else{
            error["Mname"]=Mname.message
        }
        
        this.setState(prevState=>({
            errors:prevState.errors,error
        }))
        return Mname.status;
       
    }
    PanBlur=(e,pan)=>{
        let error=this.state.errors;
        let PanNo=panValidation(pan);
        //console.log(PanNo);
        if(PanNo.status===false){
            error["panNO"]=PanNo.message
        }else{
            error["panNO"]=PanNo.message
        }
        
        this.setState(prevState=>({
            errors:prevState.errors,error
        }));
        return PanNo.status;
    }
    EmailBlur=(e,email)=>{
        let error=this.state.errors;
        let EmailId=emailcheck(email);
        
        if(EmailId.status===false){
            error["EmailId"]=EmailId.message
        }else{
            error["EmailId"]=EmailId.message;
            this.userExist(email);
            
        }
        
        this.setState(prevState=>({
            errors:prevState.errors,error
        }));
        return EmailId.status;

    }
    
    userExist=async(email)=>{
        let UserInfo=this.state.UserInfo;
        let error=this.state.errors;
        let existdata=await UserExist(email);

        if(existdata.status==="success"){
            error['emailMsg']="We are fetching your data";
            this.setState(prevState=>({userExist:"success",errors:prevState.errors,error}));
            let ccData={"userGUID": "","emailId": email};
            let getData= await getccUserData(ccData);
            
            if(getData.success===true){
               
                let dataDisplay=getData.response.creditCardData;
                let getUserData=getData.response.userData;   
                UserInfo['Fname']=getUserData.FirstName;
                UserInfo['Mname']=getUserData.MiddleName;
                UserInfo['Lname']=getUserData.LastName;
                UserInfo['MobileNo']=getUserData.MobileNo;
               // console.info("userGUID", getUserData.UserGUID);
                
                this.setState(prevState=>({
                    UserInfo:prevState.UserInfo,
                    ccUserData:dataDisplay,
                    getUserData:getUserData,
                    UserGUID:getUserData.UserGUID,
                }));
                let sendOTP={
                    EmailId:email,
                    MobileNo:getUserData.MobileNo,
                    fullname:getUserData.FirstName
                }
                this.triggerMobileOTP(sendOTP);

            }
           

        }else{
            this.setState(prevState=>({
                userExist:"failed",
                otpcom:true,
            }));
        }

    }
    triggerMobileOTP=async(data)=>{
        let error=this.state.errors;

       let sendRes= await mobileOTP(data);
      
       if(sendRes.res.status==="success"){
         error['emailMsg']="";  
        error['otpmsg']=`OTP send register Mobile NO XXXXXX ${sendRes.mobileno}`;
        
        this.setState(prevState=>({
            otpcom:false,
            errors:prevState.errors,error
          
        }));
       

         error['otpmsg'] = '';
        
        setTimeout(function(){this.setState({errors:error})}.bind(this), 4000);
          
       }
    }

    mobileBlur=(e,mobile)=>{
        let error=this.state.errors;
        let {EmailId,MobileNo,Fname} = this.state.UserInfo;
        let mobileno=mobilenumber(mobile);
       
        if(mobileno.status===false){
            error["MobileNo"]=mobileno.message
        }else{
            error["MobileNo"]=mobileno.message
            let sendOTP={
                EmailId:EmailId,
                MobileNo:MobileNo,
                fullname:Fname
            }
            let ValidName=nameVali(Fname);
            let emailvalid=emailcheck(EmailId);
             if(ValidName.status===false){
                error["Fname"]=ValidName.message
            }else  if(emailvalid.status===false){
                error["EmailId"]=emailvalid.message
            }else{
                error["Fname"]=ValidName.message
                error["EmailId"]=emailcheck.message
                this.triggerMobileOTP(sendOTP)
            }
           
            
        }
        
        this.setState(prevState=>({
            errors:prevState.errors,error
        }));
        return mobileno.status;
    }
    mobileOTPBlur=async(e,otp)=>{
        let error=this.state.errors;
        let{EmailId,MobileOTP,MobileNo,Fname,Mname,Lname} = this.state.UserInfo;
        let UserInfo=this.state.UserInfo;
        let ccUserData=this.state.ccUserData;
        console.log(ccUserData);
        let FullName=`${Fname} ${Mname} ${Lname}`;
        let userExist=this.state.userExist;
        let otpValid=mobileotp(otp);
       // console.log(otpValid);
        if(otpValid.status===false){
            error["MobileOTP"]=otpValid.message
        }
        else{
            
            error["MobileOTP"]=otpValid.message;
           
            if(userExist==="success"){
                let Signdata={
                    EmailId:EmailId,
                    FullName:FullName,
                    MobileNo:MobileNo,
                    MobileOTP:MobileOTP,
                    PageURL:getPageUrl,
                    Password:"",
                    BrowserType:browser.name,
                    
                }
                let InData=await SignIn(Signdata)
                if(InData.response.status==="success"){
                    console.log('CCuser',ccUserData);
                    if(ccUserData!=="" ){
                        UserInfo['panNO']=ccUserData.PanNumber;
                        UserInfo['DOB']=ccUserData.DateOfBirth.split('-').reverse().join('-');
                        UserInfo['gender']=ccUserData.GenderId;
                    }else{
                        UserInfo['panNO']="";
                        UserInfo['DOB']="";
                        UserInfo['gender']="2";
                    }
                   
                    this.setState(prevState=>({
                        UserInfo:prevState.UserInfo,
                        otpRes:true,
                        

                    }))
                    
                }else{
                    error['MobileOTP']=InData.response.message;
                    this.setState(prevState=>({
                        errors:prevState.errors,error
                    }))
                }

                //console.log(InData)
            }else{
                console.log('signUp else');
                let SignUpdata={
                    EmailId:EmailId,
                    FullName:FullName,
                    MobileNo:MobileNo,
                    MobileOTP:MobileOTP,
                    PageURL:getPageUrl,
                    Password:"",
                    BrowserType:browser.name,
                 };
                 let Updata= await SignUp(SignUpdata);
                 
                 
                 if(Updata.response.status==="success"){
                   
                       console.log('signup',Updata) 
                     this.setState({otpRes:true,UserGUID:Updata.response.response.UserGUID})
                 }else{
                     console.log('signup else');
                    error['MobileOTP']=Updata.response.message;
                    this.setState(prevState=>({
                        errors:prevState.errors,error
                    }))
                 }

                // console.log(Updata)
            }

        }
        
        this.setState(prevState=>({
            errors:prevState.errors,error
        }));
        return otpValid.status;

    }

    DobBlur=(e,dob)=>{
        
        let error=this.state.errors;
        let ageValid=dobValid(dob);

        if(ageValid.status===false){
            error["DOB"]=ageValid.message
        }else{
            error["DOB"]=ageValid.message
        }
        
        this.setState(prevState=>({
            errors:prevState.errors,error
        }));
        return ageValid.status;
    }

 formValidation(){
     

    let {Fname,Lname,Mname,MobileNo,MobileOTP,panNO,EmailId,DOB}=this.state.UserInfo;
    let error=this.state.errors;
    let IsValid=false;
    let ValidName=nameVali(Fname);
    let LastName=nameVali(Lname);
    let MiddleName=Mnamevalidation(Mname);
    let Panvalid=panValidation(panNO);
    let Emailvalid=emailcheck(EmailId);
    let ageValid=dobValid(DOB);
    let mobileno=mobilenumber(MobileNo);
    let otpValid=mobileotp(MobileOTP);
    
        if(ValidName.status===false){
            IsValid=false;
            error["Fname"]=ValidName.message
            
        }
        else if(LastName.status===false){
            IsValid=false;
           error["Lname"]=LastName.message
         }
        else if(MiddleName.status===false){
            IsValid=false;
             error["Mname"]=MiddleName.message
         }
        else if(Panvalid.status===false){
                 IsValid=false;
             error["panNO"]=Panvalid.message
         }
         else if(Emailvalid.status===false){
            error["EmailId"]=Emailvalid.message
        }else if(ageValid.status===false){
            error["DOB"]=ageValid.message
        }else if(mobileno.status===false){
            error["MobileNo"]=mobileno.message
        }else if(otpValid.status===false){
            error["MobileOTP"]=otpValid.message
        }
        else{
            IsValid=true;
            error["Fname"]="";
            error["Mname"]="";
            error["Lname"]="";
            error["panNO"]="";
            error["EmailId"]="";
            error["DOB"]="";
            error["MobileNo"]="";
            error["MobileOTP"]=""
        }
        this.setState(prevState=>({
            errors:prevState.errors,error
        }))
        return IsValid
    
       
      
       

    
    
}


    onclickButton=async()=>{
        //console.log(this.state.userGUID);
        let IsValid=this.formValidation();
        console.log(IsValid);

        if(IsValid){
            console.info("onclick state", this.state);
            let {Fname,Lname,Mname,MobileNo,MobileOTP,panNO,EmailId,DOB,gender}=this.state.UserInfo;
            let{relation,HdfcAc} =this.state.Hdfc;
            let formData={
                firstName:Fname,
                middleName:Mname,
                lastName:Lname,
                userGUID:this.state.UserGUID,
                panNumber:panNO, 
                emailId:EmailId,
                mobileNumber:MobileNo,
                dateOfBirth:DOB.split("-").reverse().join('-'), 
                gender:gender,
                bankId:this.state.bankData.BankId, 
                cardId:this.state.bankData.Id, 
                pageURL:getPageUrl, 
                hdfcRelationship:relation,
                hdfcAccountNumber:HdfcAc,
                leadSource:"Credit Card"
            }
            console.log("payload", formData);
            let returnFormData=await saveForm1(formData);
            if(returnFormData.success===true){
                window.sessionStorage.setItem("UserGUID",this.state.UserGUID);
                this.props.history.push({ pathname: '/BankDetailPersonal'})
            }
            console.log("api response",returnFormData);
        }
        //alert();
       
    }
    render(){
       console.log(this.state);
       
        return(
            <Aux>
              
                <BodyWrapper>
                    <ChangeCart image={this.state.bankData.CardImageName} name={this.state.bankData.Name}/>
                    <TabList active_menu="active_menu" active_done="disabled_nav" disabled_nav="disabled_nav"/>
                   
                    <div className="change_card clearfix" style={{marginTop:'0px',height:"auto"}}>
                        <Error>
                        <Basic 
                        userExist={this.state.userExist}
                        ref={{ref1:this.ref1,ref2:this.ref2}}
                        error={this.state.errors}
                        NameBlur={this.FnameBlur}
                        LnameBlur={this.LnameBlur}
                        MnameBlur={this.MnameBlur}
                        PanBlur={this.PanBlur}
                        emailBlur={this.EmailBlur}
                        mobileBlur={this.mobileBlur}
                        mobileOTPBlur={this.mobileOTPBlur}
                        DobBlur={this.DobBlur}
                        HDFC={this.state.Hdfc}
                        otpCom={this.state.otpcom}
                        btnSubmit={this.onclickButton}
                        change={this.onChangeHandler}
                        Basic={this.state.UserInfo}
                        BankId={this.state.bankData.BankId}/>
                       </Error> 
                    </div>
                </BodyWrapper>
            </Aux>

        )
    }
}

export default BankDetailBasic