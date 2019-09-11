import React from "react";
import Aux from '../../HOC/aux';
import BodyWrapper from '../../HOC/container';
import TitleBg from '../../component/title/title';
import './thankYou.css';


const fail=(props)=>{
    return(
        <Aux>
            <BodyWrapper>
                <div className="whiteBg paddthank clearfix">
                    <div className="col-md-12">
                        <TitleBg titlebg="Due to technical error we are unable to process your application right now!! ">
                            
                        </TitleBg>
                        
                    </div>
                    <div className="col-md-12 text-center failimg">
                        <img src={require('./images/fail.png')}  className="img-responsive img-center" alt="fail"/>
                    </div>
                    <div className="col-md-12 text-center">
                        <button type="button" className="bntnew">Apply for new credit card</button>
                    </div>
                </div>
            </BodyWrapper>
        </Aux>
    )
}

export default fail;