import React from 'react';

import Aux from '../../HOC/aux';
import './arrowButton.css';

const arrowButton =(props)=>{
    return (
        <Aux>
            <button type="button" className={`btn-conti ${props.btnLoader?"in-progress":null}`} onClick={(e)=>props.btnSubmit(e)}>{props.btnname}<span className="btnArrow"></span></button>
        </Aux>
    )
}
export default arrowButton