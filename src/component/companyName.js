import React from 'react';
import Aux from '../HOC/aux';

import FormMargin from '../HOC/formBottomMargin';
import Label from './label/label';
import Error from '../HOC/Error'
import Autocomplete from 'react-autocomplete';

 const companyName=(props)=>{
   
    return (
        <Aux>
           <FormMargin>
            <Label label="Company Name"/>
            <Autocomplete className="txtinput"
                getItemValue={(item) => item.label}
                items={[
                    { label: 'apple' },
                    { label: 'banana' },
                    { label: 'pear' }
                ]}
                renderItem={(item, isHighlighted) =>
                    <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                    {item.label}
                    </div>
                }
               
               
               
                />
            <Error error=""/>
            </FormMargin> 
        </Aux>
       
      
    )
}

export default companyName