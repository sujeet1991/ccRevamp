import React from 'react';
import Aux from '../HOC/aux';
import {UserConsumer} from '../context/propsContext';
import FormMargin from '../HOC/formBottomMargin';
import Label from './label/label';
import Error from '../HOC/Error'

 const pincode=(props)=>{
    return (
       <UserConsumer>
          {props=> 
        <Aux>
           <FormMargin>
            <Label label="Pincode"/>
            <input type="text" maxLength="6" className="txtinput" onBlur={(e)=>props.pincodeBlur(e,props.statedata.Pincode)} disabled={props.statedata.pincodeExist?true:false} onChange={(e)=>props.ChangeHandler(e)}  value={props.statedata.Pincode} name="Pincode"/>
            <Error error={`${props.statedata.errors['pincodeError']!==undefined?props.statedata.errors['pincodeError']:""}`}/>
            </FormMargin> 
        </Aux>
       } 
       </UserConsumer>  
    )
}

export default pincode