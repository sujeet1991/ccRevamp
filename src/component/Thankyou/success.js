import React from "react";
import Aux from '../../HOC/aux';
import BodyWrapper from '../../HOC/container';
import TitleBg from '../../component/title/title'
import './thankYou.css';


const success=(props)=>{
    return(
        <Aux>
            <BodyWrapper>
                <div className="whiteBg paddthank clearfix">
                    <div className="col-md-12">
                        <TitleBg titlebg="Congratulations! ">
                            <p className="parahead text-center">
                            Your Application has been submitted. Bank will get back to you shortly for further proces.
                            </p>
                        </TitleBg>
                    </div>
                </div>
            </BodyWrapper>
        </Aux>
    )
}

export default success;