import React, { Component } from 'react';
import Aux from '../HOC/aux';
import Landing from './Landing/landing';
import PreOffer from './preOffer/preOffer';
import Offerpage  from './offerpage/offerpage';
import BankDetail from './BankPage/BankDetailBasic';
import BankDetailPersonal from './BankPage/BankDetailPersonal';
import BankDetailComm from './BankPage/BankDetailComm';
import Success from '../component/Thankyou/success';
import Fail from '../component/Thankyou/fail';
import {Switch,Route} from "react-router"

class mainRoute extends Component {
    render() {
        return (
            <Aux>
                <Switch>
                    <Route path="/" exact  component={Landing}/>
                    <Route path="/PreOffer"  component={PreOffer}/>
                    <Route path="/Offerpage" component={Offerpage}/>
                    <Route path="/BankDetailBasic" component={BankDetail}/>
                    <Route path="/BankDetailPersonal" component={BankDetailPersonal}/>
                    <Route path="/BankDetailComm" component={BankDetailComm}/>
                    <Route path="/Success" component={Success}/>
                    <Route path="/Fail" component={Fail}/>

                </Switch>
                
            </Aux>
        )
    }
}

export default mainRoute