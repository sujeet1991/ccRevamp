import React, { Component } from 'react';
import Aux from '../../HOC/aux';
// import  { Redirect,Link } from 'react-router-dom'
import BodyContainer from '../../HOC/container';
import TitleBg from '../../component/title/title';
import Filter from '../../component/filter/filter';
import { withRouter } from 'react-router-dom';
import FilterHoc from '../../HOC/filterHoc';
import Tnc from '../../component/tnc/tnc';
import ArrowButton from '../../component/arrowButton/arrowButton';
import './landing.css';


class landing extends Component {
    constructor(props){
        super(props)
        this.state={
           cardtype:[],
          isError:false,
          btnLoader:false
        }
       
    }
   
UNSAFE_componentWillMount(){
    window.sessionStorage.clear();
}

    nextStep=()=>{
        let checkLength= this.props.stateCheckbox;
        if(checkLength.length>0){
            window.sessionStorage.setItem("cardtype",JSON.stringify(checkLength))
            this.props.history.push("/PreOffer");
        }else{
            this.setState({isError:true})
            setTimeout(function(){this.setState({ isError:false})}.bind(this), 3000);
        } 
    }
    componentWillReceiveProps(nextProps){
      let checkValue=nextProps.stateCheckbox;
      this.setState({
        cardtype:checkValue
     })
    }
    render() {
        
      return (
            <Aux>
               <div className="bannerbg">
                   <BodyContainer>
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="bannertitle">Find the best credit card<br/>
that fits your need</h1>    
                            </div>    
                        </div> 
                    </BodyContainer> 
                </div> 
                <BodyContainer>
                    <div className="whiteBg marginTopMinus">
                            <TitleBg titlebg="Select the desired utility and we will suggest right card for your"/>

                            <Filter checkClick={this.props.checkClick} checkActive={this.props.stateCheckbox}/>
                             <div className="row">
                                 <div className="col-md-12 text-center margin-topbtn">
                                  {this.state.isError?   
                                 <div class="alert alert-danger danger-cus"  role="alert">
                                        Please Select Atleast one desired option
                                    </div>:null}
                                     <ArrowButton btnname="Continue" btnLoader={this.state.btnLoader}  btnSubmit={this.nextStep}/> 
                                 </div>
                                 <div className="col-md-12 text-center" style={{marginTop:"20px"}}>
                                     <Tnc/>
                                 </div>
                            </div>   
                            
                    </div>
                </BodyContainer>


                
                  
                  
                   
                    
               
            </Aux>
        )
    }
}
export default FilterHoc(withRouter(landing))
