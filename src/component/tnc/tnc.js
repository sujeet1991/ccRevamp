import React from 'react';
import Aux from '../../HOC/aux';
import {Link} from 'react-router-dom';
import './tnc.css';

const tnc=(props)=>{
    return (
        <Aux>
            <p className="priva-con">By clicking ‘Continue' you agree to the Aditya Birla MyUniverse Ltd.  <Link to="">Privacy Policy</Link> and <Link to=""> Terms & Conditions</Link></p>
        </Aux>
    )
}

export default tnc;
