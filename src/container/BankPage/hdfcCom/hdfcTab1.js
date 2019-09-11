import React from 'react';
import Aux from '../../../HOC/aux';
import FormMargin from '../../../HOC/formBottomMargin';
import Label from '../../../component/label/label';

const hdfcTab1=(props)=>{
    console.log(props);
    return(
        <Aux>
           <div className="col-md-12 col-xs-12 padd0">
                <div className="col-md-6 col-xs-12">
                        <FormMargin>
                            <Label label="Do you have an existing relation width HDFC"/>
                            <div className="gender-align">
                                <div className="radio">
                                <input id="hdfcyes" name="relation"  onChange={(e)=>props.hdfChange(e)}  value="1" type="radio" checked={props.HDFC.relation==='1'?true:false}/>
                                <label htmlFor="hdfcyes" className="radio-label">Yes</label>
                                </div>  
                                <div className="radio">
                                <input id="hdfcno" name="relation" onChange={(e)=>props.hdfChange(e)} value="0" type="radio"  checked={props.HDFC.relation==='0'?true:false}/>
                                <label htmlFor="hdfcno" className="radio-label">No</label>
                                </div>  
                            </div>
                          
                        </FormMargin>
                </div>
                {props.HDFC.relation==='1'?
                <div className="col-md-4 col-xs-12">
                        <FormMargin>
                            <Label label="Account No (Optional)"/>
                            <input type="text" name="HdfcAc" onChange={(e)=>props.hdfChange(e)} className="txtinput" placeholder="Enter Account Number" value={props.HDFC.HdfcAc}/>
                          
                        </FormMargin>
                </div>:null}
           </div>
        </Aux>
    )
}

export default hdfcTab1;