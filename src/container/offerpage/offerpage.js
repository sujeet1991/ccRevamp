import React, { Component } from 'react';
import Api from '../../ApiList';
import BodyWrapper from '../../HOC/container';
import TitleBg from '../../component/title/title';
import  {withRouter } from 'react-router-dom';
import Aux from '../../HOC/aux';
import OfferFilter from './offerfilter';
import PopUp from './popUp';
// import FilterCom from '../../component/filter/filter';
 import FilterHoc from '../../HOC/filterHoc';
import './offerpage.css';

class offerpage extends Component {
    constructor(props){
        super(props)
        this.state={
            Income:"",
            Pincode:"",
            cardType:[],
            apidata:null,
            singleReacord:[],
            popUp:false

        }
        //this.pageRedirect=this.pageRedirect.bind(this);
    }
    
    UNSAFE_componentWillMount(){
       
        let incomeDetail=JSON.parse(window.sessionStorage.getItem("IncomeDetail"));
        if(incomeDetail!==null){
            let {Income,Pincode}=incomeDetail;
           // let getCardType=JSON.parse(window.sessionStorage.getItem("cardtype"));
            this.setState(prevState=>({
            Income:Income,
            Pincode:Pincode,
            cardType:this.props.stateCheckbox,
            }));
            fetch(Api.getOffer,{
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({Income:Income,PinCode:Pincode})
              }).then(res=>res.json()).then(data=>{
                  
                  if(data.status==='success'){
                      this.setState({apidata:data.data})
                  }
              }) 
        }else{
            this.props.history.push("/PreOffer");
        }
        
        
 

    }
    // checkClick=(event)=>{
    //     let checktrue= event.target.checked;
    //     let activename=event.target.name;
       
    //     if(checktrue){
    //        this.setState(prevState=>({
    //         cardType:[...prevState.cardType,activename]
    //        }))

    //     }else{
    //         let getcardType=[...this.state.cardType];
    //         var findindex= getcardType.indexOf(activename);
            
    //         if(findindex!==-1){
    //             getcardType.splice(findindex,1);
    //             this.setState({cardType:getcardType})
    //         }
    //     }
    //     }
    componentDidUpdate(prevProps,prevState){
      
      
    }
    moreInfoBtn=(e)=>{
        let {apidata}=this.state;
       let getId= e.target.getAttribute("data-ids");
        let perData=apidata.filter(function(r){
        return r.Id===getId})
        this.setState({singleReacord:perData,popUp:true});
    }
    hidePopUp=()=>{
        this.setState({
            popUp:false
        })
    }

    pageRedirect=(currID,bankID)=>{
        //alert();
        if(currID){
            let offerData=this.state.apidata;
            let filterData=offerData.filter((curr)=>{
                return curr.Id===currID
            })
            let dataSetSession={
                BankId:filterData[0].BankId,
                CardImageName:filterData[0].CardImageName,
                Id:filterData[0].Id,
                Name:filterData[0].Name
            }
            window.sessionStorage.setItem("Detail",JSON.stringify(dataSetSession));
            this.props.history.push("/BankDetailBasic");
             //<Redirect to={{pathname: '/BankDetailBasic',state:dataSetSession}}/>
           
        }
       
        
    }    
    render() {
        console.log(this.props.stateCheckbox)
       // console.log(this.state.singleReacord)
       

        let listDisplay="Loading";
        if(this.state.apidata!==null){
            listDisplay=this.state.apidata.map((curr,index)=>{
                let carrRewards=curr.Rewards;
                let currPerk=curr.JoiningPerks;
               
                let countNu=70;
                let finalReward="";
                let finalPerk="";
                if(carrRewards.length>countNu ||currPerk.length>50){
                    finalReward=carrRewards.slice(0,countNu)+"...";
                    finalPerk=currPerk.slice(0,40)+"...";
                }else{
                    finalReward=carrRewards;
                    finalPerk=currPerk;
                }

                if(this.state.cardType.length>0){
                    for(var i=0;i<this.props.stateCheckbox.length;i++){
                        console.log(typeof this.state.cardType[i])
                        // Shopping & Dining
                        let dataNamefilter="";
                        if(this.props.stateCheckbox[i]==="Shopping" || this.props.stateCheckbox[i]==="Dining"){
                            dataNamefilter="Shopping & Dining";
                        }else{
                            dataNamefilter=this.props.stateCheckbox[i]
                        }
                        //console.log(dataNamefilter);
                        if(curr.SubCategory===dataNamefilter){
                            return(
                                <div className="col-md-4 col-sm-6 col-xs-12 col-showcard" key={index}>
                                <div className="card-wrapp">
                                    <img src={`https://s3.ap-south-1.amazonaws.com/product-bucket-user/creditcards/images/${curr.CardImageName}`} alt="card" className="img-responsive"/>
                                    <div className="card-detail clearfix">
                                        <h3 className="bank-name">{curr.Name}</h3>
                                        <div className="col-md-12 padd0">
                                           <h4 className="cardsubti">Rewards Details</h4> 
                                           <p className="bullet-point">
                                            {finalReward} 
                                           </p>
                                           
                                        </div>
                                        <div className="col-md-12 padd0">
                                          <div className="col-md-6 padd-right">
                                             <h4 className="cardsubti">Joining Perks</h4> 
                                                <p className="bullet-point no-buttet">{finalPerk}</p>
                                            </div> 
                                          <div className="col-md-6 padd-right">
                                          <h4 className="cardsubti">Joining Fees</h4> 
                                          <p className="ruppes-amt"><span><i className="fa fa-inr" aria-hidden="true"></i></span> {curr.JoiningFees}</p>
                                        </div>  
                                        </div>
    
                                        <div className="col-md-12 padd0">
                                         <div className="col-md-6 padd-right">
                                             <button className="more-info" onClick={(e)=>this.moreInfoBtn(e)} data-ids={curr.Id}>More Information <span className="glyphicon glyphicon-menu-right"></span></button>
                                         </div>
                                         <div className="col-md-6 padd-right">
                                         <button className="more-info-apply" ref="applybtn" onClick={(e)=>this.pageRedirect(curr.Id,curr.BankId)} >Apply</button>
                                         </div>
                                         
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                            )
                        }
                       
                    }
                }
               
               
                
            })
        }

        return (
            <Aux>
                {this.state.popUp?<PopUp hidePopUp={this.hidePopUp} recordOne={this.state.singleReacord}/>:null}
                
             <BodyWrapper>
                 <div className="whiteBg paddfir">
                     <OfferFilter cardType={this.props.stateCheckbox} checkClick={this.props.checkClick}/>
                   
                 </div>

                

                <div className="whiteBg">
                    <div className="row">
                        <div className="col-md-12 text-center">

                            <TitleBg titlebg="Recommended credit card based on your desired utility">
                                <p className="parahead">We suggest these credit cards based on your requirement. You can change the utility for other options.</p>
                            </TitleBg>
                        </div>
                    </div>

                    <div className="row">
                        {this.props.stateCheckbox.length>0?null:<div class="alert alert-info" role="alert">
  Please select card Type
</div>}
                        {listDisplay}
                    </div>
                </div>
             </BodyWrapper>
            </Aux>
        )
    }
}

export default FilterHoc(withRouter(offerpage))
