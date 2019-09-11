import React, { Component } from 'react'
import Aux from '../../HOC/aux';
import BodyWrapper from '../../HOC/container';
import TitleBg from '../../component/title/title';
import ArrowButton from '../../component/arrowButton/arrowButton';
import Tnc from '../../component/tnc/tnc';
import {UserProvider} from '../../context/propsContext';
import  {withRouter } from 'react-router-dom';
import {pincodeVali,incomeVali} from '../../validation/validation';


import Income from '../../component/salary';
import Pincode from '../../component/pincode';


 class preOffer extends Component {
     constructor(props){
         super(props)
         this.state={
            Income:'',
            Pincode:'',
            cardType:[],
            errors:{},
            btnLoader:false

         }
         this.nextPageOffer=this.nextPageOffer.bind(this);
     }

     componentWillMount(){
         let getCardType=JSON.parse(window.sessionStorage.getItem("cardtype"));
         console.log(getCardType);
         if(getCardType !==null){
             
         }else{
            let path = `/`;
           this.props.history.push(path);
         }
         
         //this.setState({cardType:getCardType})
        // console.log(typeof getCardType);
     }

     onChangeHadler=(e)=>{
        let getstateData=this.state;
        if(e.target.name==="Income" ){
            if(e.target.value===""||/^[0-9\b]+$/.test(e.target.value)){
                getstateData[e.target.name]=e.target.value;
            }
        }
        else if(e.target.name==="Pincode" ){
            console.log(e.target.name)
            if(e.target.value===""||/^[0-9\b]+$/.test(e.target.value)){
                getstateData[e.target.name]=e.target.value;
            }
        }else{
            getstateData[e.target.name]=e.target.value;
        }
       
        this.setState({getstateData})
    }

    pincodeBlur=(e,pincodeData)=>{
        let error= this.state.errors;
        let validCheck=true;
        let pincodevalid= pincodeVali(pincodeData);
       
        if(pincodevalid.response===false){
            validCheck=false;
            error['pincodeError']=pincodevalid.message
            
        }else{
            validCheck=true;
            error['pincodeError']=""
        }
        this.setState(prevState=>({errors:prevState.errors,error}));  
        return validCheck;
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

    formValidatd=()=>{
        let{Income,Pincode} =this.state;
        let incomeValid= this.incomeBlur(null,Income);
        let pincodeValid=this.pincodeBlur(null,Pincode);
        if(incomeValid===false){
            return false;
        }else if(pincodeValid===false){
            return false;
        }else{
            return true
        }
      }



    nextPageOffer=()=>{
       let checkFormvalid=this.formValidatd();
       let{Income,Pincode} =this.state;
       if(checkFormvalid){
           this.setState({
                btnLoader:true
           });
           let IncomeDetail={Income:Income,Pincode:Pincode};
           window.sessionStorage.setItem("IncomeDetail",JSON.stringify(IncomeDetail))
        this.props.history.push({
            pathname: '/Offerpage',
            
        })
       }else{
        this.setState({
            btnLoader:false
       })
       }
    }

    render() {
       
       return (
            <Aux>
                <BodyWrapper>
                <div className="whiteBg ">
                            <TitleBg titlebg="You are just one step away to get the right Credit Card from wide range of banks"/>
                             <form>
                                <div className="col-md-8 col-md-offset-2" style={{marginTop:'30px',marginBottom:"30px"}}>
                                        <UserProvider value={{statedata:this.state,ChangeHandler:this.onChangeHadler,pincodeBlur:this.pincodeBlur,incomeBlur:this.incomeBlur}}>


                                        <div className="col-md-6">
                                        <Income />
                                        </div>
                                        <div className="col-md-6">
                                        <Pincode />
                                        </div>
                                        
                                </UserProvider>  
                                </div>
            
                             <div className="row">
                             <div className="col-md-12 text-center margin-topbtn">
                                         <ArrowButton btnLoader={this.state.btnLoader} btnname="Proceed"  btnSubmit={this.nextPageOffer}/> 
                                 </div>
                                 <div className="col-md-12 text-center" style={{marginTop:"20px"}}>
                                     <Tnc/>
                                 </div>
                            </div>  
                            </form>   
                          
                            
                    </div>
                </BodyWrapper>
            </Aux> 
                
                
        )
    }
}

export default withRouter(preOffer)