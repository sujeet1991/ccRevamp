import React from 'react';
import Aux from '../../HOC/aux';
// import ScrollBar from 'react-perfect-scrollbar';
// import 'react-perfect-scrollbar/dist/css/styles.css';

const popUp=(props)=>{
    console.log(props);
    // let travelData= props.recordOne[0].TravelFeatures;
    // let travelFind=travelData.indexOf('&#9679;');
    // let TravelNull="";
    // if(travelFind!==-1){
    //    let data= travelData.split("<br>");
    //    TravelNull=data;

    // }else{
    //     TravelNull=travelData;
    // }
    //console.log(TravelNull)
    return(
        <Aux>
            <div className="modelpopBg">
                <div className="modelContent clearfix">
                    <span className="btn_close" onClick={(e)=>props.hidePopUp(e)}></span>
                    <div className="col-md-12 padd0">
                        <h2 className="popuptitle">{props.recordOne[0].Name}</h2>
                    </div>
                <div className="scroll-custom clearfix">
                    <div className="col-md-4 col-xs-12 padd0">
                        <div className="card-img"><img src={`https://s3.ap-south-1.amazonaws.com/product-bucket-user/creditcards/images/${props.recordOne[0].CardImageName}`} alt="card" className="img-responsive"/>

                          
                        </div>
                        <button className="more-info-apply btn-app"  >Apply</button>
                    </div>
                    <div className="col-md-8 col-xs-12 padd0 clearfix">
                        <div className="col-md-6 col-xs-12">
                            <h5 className="popsubTitle">Features</h5>
                            <div className="col-innerPOP">
                                <h6 className="col-innerTitle">Other Features</h6>
                                <p className="col-innerSubDesc">{props.recordOne[0].OtherFeatures}</p>
                            </div>
                            <div className="col-innerPOP">
                                <h6 className="col-innerTitle">Travel</h6>
                                
                                <p className="col-innerSubDesc">{props.recordOne[0].TravelFeatures}</p>
                            </div>
                            <div className="col-innerPOP">
                                <h6 className="col-innerTitle">Entertainment</h6>
                                <p className="col-innerSubDesc">{props.recordOne[0].EntertainmentFeatures}</p>
                               
                            </div>
                            <div className="col-innerPOP">
                                <h6 className="col-innerTitle">Fuel</h6>
                                <p className="col-innerSubDesc">{props.recordOne[0].FuelSurchargeWaiver}</p>
                               
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <h5 className="popsubTitle">Rewards</h5>
                            <div className="col-innerPOP">
                                <h6 className="col-innerTitle">Rewards Details</h6>
                                <p className="col-innerSubDesc">{props.recordOne[0].Rewards}</p>
                                
                               
                            </div>
                            <div className="col-innerPOP">
                                <h6 className="col-innerTitle">Redemption Options</h6>
                                <p className="col-innerSubDesc">{props.recordOne[0].RedemptionOptions}</p>
                                
                               
                            </div>
                            <div className="col-innerPOP">
                                <h6 className="col-innerTitle">Joining Perks</h6>
                                <p className="col-innerSubDesc">{props.recordOne[0].JoiningPerks}</p>
                                
                               
                            </div>
                            <div className="col-innerPOP">
                                <h6 className="col-innerTitle">Joining Fees</h6>
                                <p className="col-innerSubDesc"><span className="ruppes-amt"><span><i className="fa fa-inr" aria-hidden="true"></i></span> {props.recordOne[0].JoiningFees}</span></p>
                                
                               
                            </div>
                        </div>
                    </div>
                </div>  
                </div>
            </div>
            
        </Aux>

    )
}

export default popUp;