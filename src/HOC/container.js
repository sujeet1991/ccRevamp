import React from 'react';
import './hoc.css';

const bodycontainer =props=>(
    <div className="bodycontainer">
        {props.children}
        </div>
)


export default bodycontainer;