import React from 'react';
import Aux from '../HOC/aux';
import Select from 'react-select';
import FormMargin from '../HOC/formBottomMargin';
import Label from './label/label';
import {UserConsumer} from '../context/propsContext';
import Error from '../HOC/Error'

 const OccupationType=(props)=>{
    const options = [
        { value: '5', label: 'Salaried' },
        { value: '6', label: 'Self Employed' },
      ];
    return (
        <Aux>
        <UserConsumer>

          {props=><FormMargin>
            <Label label="Occupation Type"/>
            
            <Select
                onChange={props.onselectHandler} 
                value={options.filter(function(curr){
                    if(curr.value===props.statedata.EmploymentType){
                       return curr.value
                    }

                })}
                //value={options.filter(curr=>curr.label==props.statedata.EmploymentType?curr.value:"")}
                name='EmploymentType'
                options={options}
            />
            <Error error=""/>
            </FormMargin> }
          
            </UserConsumer>
        </Aux>
       
      
    )
}

export default OccupationType