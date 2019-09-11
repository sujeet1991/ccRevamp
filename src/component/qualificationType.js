import React from 'react';
import Aux from '../HOC/aux';
import Select from 'react-select';
import FormMargin from '../HOC/formBottomMargin';
import Label from './label/label';
import Error from '../HOC/Error'

 const qualificationType=(props)=>{
    const options = [
        { value: 'Post Graduate and Above', label: 'Post Graduate and Above' },
        { value: 'Graduate', label: 'Graduate' },
        { value: 'Higher Secondary', label: 'Higher Secondary' },
        { value: 'Metric or Below', label: 'Metric or Below' },

      ];
    return (
        <Aux>
           <FormMargin>
            <Label label="Qualification Type"/>
            <Select
                name="qualificationType"
                options={options}
            />
            <Error error=""/>
            </FormMargin> 
        </Aux>
       
      
    )
}

export default qualificationType