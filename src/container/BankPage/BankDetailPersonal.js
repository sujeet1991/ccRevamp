import React,{Component} from 'react';
import Aux from '../../HOC/aux';
import BodyWrapper from '../../HOC/container';
import ChangeCart from '../../component/ChangeCard/changeCard';
import {UserProvider} from '../../context/propsContext';
import TabList from '../../component/TabList/tabList';
import Personal from './Personal';
import {incomeVali} from '../../validation/validation';
import {getccUserData,saveForm2} from '../../validation/Services';
import './BankDetail.css';

class BankDetailBasic extends Component{
    constructor(props){
        super(props);
        this.state={
            bankData:{},
            Income:"",
            incomeExist:false,
            EmploymentType:"6",
            errors:{},
            UserGUID:"",
            creditCardData:null

            
        }
    }
    async UNSAFE_componentWillMount (){
        let bankData= JSON.parse(window.sessionStorage.getItem("Detail"));
        let IncomeDetail = JSON.parse(window.sessionStorage.getItem("IncomeDetail"));
        let UserGUID= window.sessionStorage.getItem('UserGUID');
        let income=IncomeDetail.Income;
        let EmploymentTypeId="" ;
        if(UserGUID!==null){
            let data={"userGUID": UserGUID,"emailId": ""};
            let getCC= await getccUserData(data);
            console.log(getCC.response.creditCardData)
            EmploymentTypeId=getCC.response.creditCardData.EmploymentTypeId===null?'5':getCC.response.creditCardData.EmploymentTypeId;

        }else{
            this.props.history.push("/Offerpage");
        }
         
        if(bankData!==null || income!==null){
            //console.log(bankData);
            this.setState({
                bankData:bankData,
                Income:income,
                incomeExist:true,
                EmploymentType:EmploymentTypeId,
                UserGUID:UserGUID})
        }else{
            this.props.history.push("/Offerpage");
        }
    }

    incomeBlur=(e,incomedata)=>{
       
        let error=this.state.errors;
        let validCheck=true;
        let incomeValid= incomeVali(incomedata);
        if(incomeValid.response===false){
            validCheck=false;
            error['incomeError']=incomeValid.message
            
        }else{
            validCheck=true;
            error['incomeError']=""
        }
        this.setState(prevState=>({errors:prevState.errors,error}));  
        return validCheck;

    }
    onselectHandler=(e, meta)=>{
        this.setState({
            [meta.name]:e.value
        })
    }  

    onChangeHadler=(e)=>{
        
       
        let stateData=this.state;
        if(e.target.name==="Income" ){
            if(e.target.value===""||/^[0-9\b]+$/.test(e.target.value)){
                stateData[e.target.name]=e.target.value
            }
        }
        else{
            stateData[e.target.name]=e.target.value
        }
        this.setState({
            stateData
        })

    }
    formValid=()=>{
        let {EmploymentType,Income,UserGUID}=this.state;
        if(EmploymentType===""){
            return false
        }else if(Income===""){
            return false;
        }else if(UserGUID===""){
            return false;
        }else{
            return true;
        }
    }

    btnSubmit=async()=>{
        // occupationType, monthlyIncome, userGUID
        let isValid=this.formValid();
        if(isValid){
            let {EmploymentType,Income,UserGUID}=this.state;
            let form2Daat={
            occupationType:EmploymentType,
            monthlyIncome:Income,
            userGUID:UserGUID
          }  
        let data=await saveForm2(form2Daat);
        if(data.success){
            this.props.history.push({ pathname: '/BankDetailComm'})
        }
        console.log(data)
    }
        
    }

    render(){
        //console.log(this.state.bankData);
        console.log("state"+this.state.EmploymentType);
        return(
            <Aux>
                <BodyWrapper>
                    <ChangeCart  image={this.state.bankData.CardImageName} name={this.state.bankData.Name}/>
                    <TabList active_menu="active_done" active_done="active_menu" disabled_nav="disabled_nav"/>
                   
                    <div className="change_card clearfix" style={{marginTop:'0px',height:"auto"}}>
                    <UserProvider value={{statedata:this.state,ChangeHandler:this.onChangeHadler,incomeBlur:this.incomeBlur,onselectHandler:this.onselectHandler}}>
                       <Personal
                         BankId={this.state.bankData.BankId}
                         btnSubmit={this.btnSubmit}
                         
                       />
                       </UserProvider>
                    </div>
                </BodyWrapper>
            </Aux>

        )
    }
}

export default BankDetailBasic