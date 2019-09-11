import React from 'react';
import Aux from '../../HOC/aux';
import FormButton from '../../component/arrowButton/arrowButton';
import OccupationType from '../../component/occupationType';
import Income from '../../component/salary';



const personal=(props)=>{
    console.log(props.BankId)
    return(
        <Aux>
            {props.BankId==='8'?
            <Aux>
               
            <div className="col-md-4">
                <OccupationType/>
            </div>
            <div className="col-md-4">
                <Income/>
            </div>
            </Aux> 
            :null}
           <div className="col-md-12 text-center margin-topbtn">
            <FormButton btnSubmit={props.btnSubmit} btnname="Next"/>
           </div>
            
        </Aux>
    )
}
export default personal;