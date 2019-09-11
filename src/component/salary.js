import React from 'react';
import Aux from '../HOC/aux';
import {UserConsumer} from '../context/propsContext';
import Label from './label/label';
import FormMargin from '../HOC/formBottomMargin';
import Error from '../HOC/Error'


 const salary=(props)=>{
    return (
        <UserConsumer>
        {props=>
            <Aux>
              <FormMargin>
                <Label label="Net Monthly Salary"/>
                <input type="text"  maxLength="8" disabled={props.statedata.incomeExist?true:false} className="txtinput" onBlur={(e)=>props.incomeBlur(e,props.statedata.Income)} onChange={(e)=>props.ChangeHandler(e)}  value={props.statedata.Income} name="Income"/>
                <Error error={`${props.statedata.errors['incomeError']!==undefined?props.statedata.errors['incomeError']:""}`}/>
             </FormMargin>  
             
            </Aux>
        } 
        </UserConsumer>
    )
}

export default salary