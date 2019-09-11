import React from 'react';
import Aux from '../../HOC/aux';
import './title.css';

const titleBg=(props)=>{
    return (
        <Aux>
            <h1 className="titlebg">{props.titlebg}</h1>
                {props.children}
            <span className="titlebgline"></span>
        </Aux>
    )
}

export default titleBg