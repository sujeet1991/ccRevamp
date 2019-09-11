import React,{Component} from 'react';
import Aux from '../../HOC/aux';
import BodyWrapper from '../../HOC/container';
import ChangeCart from '../../component/ChangeCard/changeCard';
import TabList from '../../component/TabList/tabList';
import {UserProvider} from '../../context/propsContext';
import {pincodeVali,addressCheck} from '../../validation/validation';
import {getccUserData,getPincodeCityMapping,saveForm3,callBankApi} from '../../validation/Services';
import Communication from './Communication';
import './BankDetail.css';

class BankDetailBasic extends Component{
    constructor(props){
        super(props);
        this.state={
            bankData:{},
            Pincode:"",
            city:"",
            pincodeExist:false,
            AddressType:"",
            hdfc:{
                commAddLine1:"",
                commAddLine2:"",
                commAddLine3:"",
                AddressType:"",
            },
            UserGUID:"",
            errors:{}
            
        }
    }
    async UNSAFE_componentWillMount(){
        let bankData= JSON.parse(window.sessionStorage.getItem("Detail"));
        let IncomeDetail = JSON.parse(window.sessionStorage.getItem("IncomeDetail"));
        let UserGUID= window.sessionStorage.getItem('UserGUID');
        let pincode=IncomeDetail.Pincode;
        //{pincode, bankId}
            console.log(pincode)
        // if(UserGUID!==null){
        //     let data={"userGUID": UserGUID,"emailId": ""};
        //     let getCC= await getccUserData(data);
        //     console.log(getCC.response.creditCardData)
           

        // }else{
        //     this.props.history.push("/Offerpage");
        // }
         
        if(bankData!==null || pincode!==""){
           // let CityData={pincode:pincode, bankId:bankData.BankId};

           // let getCityName= await getPincodeCityMapping(CityData);
            //console.log(getCityName);
            this.setState({
                bankData:bankData,
                Pincode:pincode,
                pincodeExist:true,
                //city:getCityName.response.CityName,
                UserGUID:UserGUID})
        }else{
            this.props.history.push("/Offerpage");
        }
    }

componentDidMount(){
    //console.log("did mount");
    if(this.state.Pincode!==""){
        this.getCityname();
    }
    if(this.state.UserGUID!==""){
        this.getCCData();
    }
    
} 
getCityname=async()=>{
    let {bankData,Pincode}=this.state;
    let CityData={pincode:Pincode, bankId:bankData.BankId};
    let getCityName= await getPincodeCityMapping(CityData);
    this.setState({
        city:getCityName.response.CityName,
    })
}  
getCCData=async()=>{
    let {UserGUID}=this.state;
    let data={"userGUID": UserGUID,"emailId": ""};
    let getCC= await getccUserData(data);
    console.log(getCC);
    let hdfcdata=this.state.hdfc;
    // AddressTypeId
    if(getCC.response.creditCardData.AddressTypeId!==null || getCC.response.creditCardData.Address!==null){
        
        hdfcdata['AddressType']=getCC.response.creditCardData.AddressTypeId;
        hdfcdata['commAddLine1']=getCC.response.creditCardData.Address;
        
    }else{
        hdfcdata['AddressType']="103";
        hdfcdata['commAddLine1']="";
    }
    this.setState(prevState=>({
        hdfc:prevState.hdfc,hdfcdata
    }))
    
   
} 
addressBlur1=(e,address1)=>{
    //let {commAddLine1}=this.state.hdfc;
    let validField=true;
    let error=this.state.errors;  
    let addLine1= addressCheck(address1);
    if(addLine1.status===false){
        validField=true;
        error['commAddLine1']=addLine1.message;
    }else{
        error['commAddLine1']="";
    }
    this.setState(prevState=>({
        errors:prevState.errors,error
    }))
    return validField;

}
addressBlur2=(e,address2)=>{
    //let {commAddLine1}=this.state.hdfc;
    let validField=true;
    let error=this.state.errors;  
    let addLine2= addressCheck(address2);
    if(addLine2.status===false){
        validField=true;
        error['commAddLine2']=addLine2.message;
    }else{
        error['commAddLine2']="";
    }
    this.setState(prevState=>({
        errors:prevState.errors,error
    }))
    return validField;

}

    pincodeBlur=()=>{

    }

    changeHandler=(e)=>{
        console.log(e.target.name,e.target.value,)
        let stateData=this.state;
        let hdfc=this.state.hdfc;
        if(e.target.name==="commAddLine1"||e.target.name==="commAddLine2"||e.target.name==="commAddLine3"||e.target.name==="AddressType"){
            hdfc[e.target.name]=e.target.value;
        }else{
            stateData[e.target.name]=e.target.value;   
        }
       
        
        this.setState({
            stateData,
            hdfc
        })
    }

    formValid=()=>{
        let {commAddLine1,commAddLine2,commAddLine3,AddressType}=this.state.hdfc;
        let bankId=this.state.bankData.BankId;
        let validField=true;
        let error=this.state.errors;  
        let addLine1= addressCheck(commAddLine1);
        let addLine2= addressCheck(commAddLine2);
        //let addLine3= addressCheck(commAddLine3);
        console.log(bankId);
        if(bankId==='8'){
            if(AddressType===""||AddressType===null){
                validField=false;
                error['AddressType']="Please Select AddressType";
            } else{
                validField=true;
                error['AddressType']="";
            }
            if(addLine1.status===false){
                validField=true;
                error['commAddLine1']=addLine1.message;
            }else{
                error['commAddLine1']="";
            }
            if(addLine2.status===false){
                validField=false;
                error['commAddLine2']=addLine2.message;
            }else{
                validField=true;
                error['commAddLine2']="";
            } 
          

        }
        this.setState(prevState=>({
            errors:prevState.errors,error
        }))
       return validField;
    }    

    btnSubmit=async()=>{
        let isValid=this.formValid();
        let {commAddLine1,commAddLine2,commAddLine3,AddressType}=this.state.hdfc;
        let {BankId,Id}=this.state.bankData;
        let {Pincode,city,UserGUID} =this.state;
        console.log(isValid);
        if(isValid){
            let DataApi={addressType:AddressType,commAddLine1:commAddLine1,commAddLine2:commAddLine2,commAddLine3:commAddLine3,pincode:Pincode,city:city,userGUID:UserGUID};
            let data= await saveForm3(DataApi);
            console.log(data);
            if(data.success){
              let bankData={
                    userGUID:UserGUID,
                    bankId:BankId,
                    cardId:Id,
                }
                let bankCall=await callBankApi(bankData);
                if(bankCall.status){
                   // console.log('success')
                    this.props.history.push("/Success");
                    //Success
                }else{
                    //console.log('fail')
                    this.props.history.push("/Fail");
                    //Fail
                }
                //console.log('bankdata',bankCall);
            }


        }
        
    }

    render(){
        
        
        // {addressType, commAddLine1, commAddLine2, commAddLine3, pincode, city, userGUID}
        return(
            <Aux>
                <BodyWrapper>
                    <ChangeCart  image={this.state.bankData.CardImageName} name={this.state.bankData.Name}/>
                    <TabList active_menu="active_done" active_done="active_done" disabled_nav="active_menu"/>
                   
                    <div className="change_card clearfix" style={{marginTop:'0px',height:"auto"}}>
                        <h3 className="com-de">Communication Details </h3>
                        <UserProvider value={{statedata:this.state,ChangeHandler:this.changeHandler,pincodeBlur:this.pincodeBlur}}>
                       <Communication
                        stateData={this.state}  
                        addressBlur1={this.addressBlur1}
                        addressBlur2={this.addressBlur2}
                        change={this.changeHandler}
                         btnSubmit={this.btnSubmit}
                         error={this.state.errors}
                       />
                       </UserProvider>
                    </div>
                </BodyWrapper>
            </Aux>

        )
    }
}

export default BankDetailBasic