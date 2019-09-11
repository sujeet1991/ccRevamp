import React from 'react';
import Aux from '../../HOC/aux';
import FormMargin from '../../HOC/formBottomMargin';
import Label from '../../component/label/label';
import Error from '../../HOC/Error';
import Pincode from '../../component/pincode';
import City from '../../component/city';
import FormButton from '../../component/arrowButton/arrowButton';


const communication=(props)=>{
    console.log(props)
    return(
        <Aux>
            {props.stateData.bankData.BankId==='8'?
            <Aux>
            <div className="col-md-12">
                <FormMargin>
                    <Label label="Please select your communication address type"/>
                    <div className="gender-align">
                    <div className="radio">
                    <input id="radio-1" name="AddressType" onChange={(e)=>props.change(e)} checked={props.stateData.hdfc.AddressType==="103"?true:false} value="103" type="radio" />
                    <label htmlFor="radio-1" className="radio-label">Residency Address</label>
                    </div>  
                    <div className="radio">
                    <input id="radio-2" name="AddressType" onChange={(e)=>props.change(e)}  checked={props.stateData.hdfc.AddressType==="130"?true:false}  value="130" type="radio" />
                    <label htmlFor="radio-2" className="radio-label">Permanent Adress</label>
                    </div> 
                    <div className="radio">
                    <input id="radio-3" name="AddressType" onChange={(e)=>props.change(e)}  checked={props.stateData.hdfc.AddressType==="106"?true:false}  value="106" type="radio" />
                    <label htmlFor="radio-3" className="radio-label">Office Adress</label>
                    </div>  
                    </div>
                    <Error error={props.error['AddressType']}/>

                </FormMargin>
            </div>
            <div className="col-md-12">
                <FormMargin>
                    <Label label="Communication  Address Line 1"/>
                    <input type="text" name="commAddLine1" maxLength="30" onBlur={(e)=>props.addressBlur1(e,props.stateData.hdfc.commAddLine1)} onChange={(e)=>props.change(e)} className="txtinput" placeholder="Address Line 1" value={props.stateData.hdfc.commAddLine1||""} />
                    <Error error={props.error['commAddLine1']}/>
                </FormMargin>
            </div>
            <div className="col-md-12">
                <FormMargin>
                    <Label label="Communication  Address Line 2"/>
                    <input type="text" name="commAddLine2" onBlur={(e)=>props.addressBlur2(e,props.stateData.hdfc.commAddLine2)} maxLength="30" className="txtinput" onChange={(e)=>props.change(e)} placeholder="Address Line 2"  value={props.stateData.hdfc.commAddLine2||""} />
                    <Error error={props.error['commAddLine2']}/>
                </FormMargin>
            </div>
            <div className="col-md-12">
                <FormMargin>
                    <Label label="Communication  Address Line 3 (Optional)"/>
                    <input type="text" name="commAddLine3" maxLength="30" className="txtinput" onChange={(e)=>props.change(e)} placeholder="Address Line 3"  />
                    <Error error={props.error['commAddLine3']}/>
                </FormMargin>
            </div>
            <div className="col-md-12 padd0">
                <div className="col-md-4">
                    <Pincode/>
                </div>
                <div className="col-md-4">
                    <City/>
                </div>
            </div>
            </Aux>:null}
            <div className="col-md-12 text-center margin-topbtn">
            <FormButton btnSubmit={props.btnSubmit} btnname="Submit"/>
           </div>
        </Aux>
    )
}
export default communication