import React from 'react';
import Aux from '../HOC/aux';
import {UserConsumer} from '../context/propsContext';
import Label from './label/label';
import FormMargin from '../HOC/formBottomMargin';
// import Error from '../HOC/Error'


 const city=(props)=>{
    return (
        <UserConsumer>
        {props=>
            <Aux>
              <FormMargin>
                <Label label="City"/>
                <input type="text"  maxLength="" disabled={true} style={{background:"#ccc"}} className="txtinput" value={props.statedata.city} name="city"/>
                
             </FormMargin>  
             
            </Aux>
        } 
        </UserConsumer>
    )
}

export default city