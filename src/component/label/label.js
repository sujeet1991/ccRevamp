import React from 'react';
import './label.css';

const Label =(props)=>{
    return(
        <label className="labelform">{props.label}</label>
    )
}
export default Label