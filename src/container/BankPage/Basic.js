import React from 'react';
import Aux from '../../HOC/aux';
import FormMargin from '../../HOC/formBottomMargin';
import NumberFormat from 'react-number-format';
import Label from '../../component/label/label';
import HdfcTab from './hdfcCom/hdfcTab1';
import FormButton from '../../component/arrowButton/arrowButton';
import BottomPara from './bottomPara'; 
import Error from '../../HOC/Error';

const  Basic=React.forwardRef((props,ref)=>{
  
        return(
            <Aux>
               
                <form>
                    <div className="col-md-12 padd0 clearfix">
                        <div className="col-md-4 col-xs-12">
                            <FormMargin>
                                <Label label="First Name"/>
                               
                                <input type="text" onBlur={(e)=>props.NameBlur(e,props.Basic.Fname)} onChange={(e)=>props.change(e)} name="Fname" className="txtinput" placeholder="Enter first name" value={props.Basic.Fname||""}/>
                                <Error error={props.error['Fname']}/>
                            </FormMargin>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <FormMargin>
                                <Label label="Middle Name"/>
                                <input type="text" name="Mname" onBlur={(e)=>props.MnameBlur(e,props.Basic.Mname)} onChange={(e)=>props.change(e)} className="txtinput" placeholder="Enter middle name (optional)" value={props.Basic.Mname||""}/>
                                <Error error={props.error['Mname']}/>
                            </FormMargin>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <FormMargin>
                                <Label label="Last Name"/>
                                <input type="text" name="Lname"
                                 onBlur={(e)=>props.LnameBlur(e,props.Basic.Lname)} 
                                 onChange={(e)=>props.change(e)} className="txtinput" placeholder="Enter last name" value={props.Basic.Lname||""}/>
                                <Error error={props.error['Lname']}/>
                            </FormMargin>
                        </div>
                        
                    </div>
                {/* next */}
                    <div className="col-md-12 padd0 clearfix">
                        <div className="col-md-4 col-xs-12">
                            <FormMargin>
                                <Label label="Pan No"/>
                                <input type="text" name="panNO" onBlur={(e)=>props.PanBlur(e,props.Basic.panNO)}  onChange={(e)=>props.change(e)} className="txtinput" placeholder="Enter PAN NO" value={props.Basic.panNO||""}/>
                                <Error error={props.error['panNO']}/>
                            </FormMargin>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <FormMargin>
                                <Label label="Email"/>
                                <input type="email" autoComplete="off"  disabled={props.userExist==='success'?true:false}  name="EmailId" onBlur={(e)=>props.emailBlur(e,props.Basic.EmailId)} onChange={(e)=>props.change(e)} className="txtinput" placeholder="Enter EmailId" value={props.Basic.EmailId||""}/>
                                <Error error={props.error['EmailId']}/>
                                {
                                    props.error["emailMsg"]!==""?<p className="otpmsg">{props.error["emailMsg"]}</p>:null
                                }
                                
                            </FormMargin>
                        </div>
                        <div className="col-md-4 col-xs-12">
                           {props.otpCom? 
                            <FormMargin>
                                <Label label="Mobile No"/>
                                <input type="text" name="MobileNo" disabled={props.userExist==='success'?true:false}    onBlur={(e)=>props.mobileBlur(e,props.Basic.MobileNo)} maxLength="10"  onChange={(e)=>props.change(e)} className="txtinput" placeholder="Enter Mobile No" value={props.Basic.MobileNo||""}/>
                                <Error error={props.error['MobileNo']}/>
                                
                                
                            </FormMargin>:

                            <FormMargin>
                                <Label label="Enter OTP"/>
                                <span className="changeMobile">Change Mobile</span>
                                <span className="resendbtn">Resend</span>
                                <input type="text"  name="MobileOTP" maxLength="6"  onChange={(e)=>props.change(e)} className="txtinput" onBlur={(e)=>props.mobileOTPBlur(e,props.Basic.MobileOTP)} value={props.Basic.MobileOTP||""} placeholder="Enter OTP"/>
                                <Error error={props.error['MobileOTP']}/>
                                {props.error['otpmsg']!==""?<p className="otpmsg">{props.error['otpmsg']}</p>:null}
                               
                            </FormMargin>}
                           
                        </div>
                        
                    </div>
                    {/* next */}
                    <div className="col-md-12 padd0 clearfix">
                        <div className="col-md-4 col-xs-12">
                            <FormMargin>
                                <Label label="Date of Birth"/>
                                <NumberFormat format="##-##-####" onBlur={(e)=>props.DobBlur(e,props.Basic.DOB)} onChange={(e)=>props.change(e)}   value={props.Basic.DOB||""} className="txtinput" name="DOB" placeholder="DD-MM-YYYY" mask={['D', 'D', 'M', 'M','Y','Y','Y','Y']}/>
                                <Error error={props.error['DOB']}/>
                            </FormMargin>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <FormMargin>
                                <Label label="Gender"/>
                                <div className="gender-align">
                                    <div className="radio">
                                    <input id="radio-1" name="gender" onChange={(e)=>props.change(e)} checked={props.Basic.gender==="2"?true:false} value="2" type="radio" />
                                    <label htmlFor="radio-1" className="radio-label">Male</label>
                                    </div>  
                                    <div className="radio">
                                    <input id="radio-2" name="gender" onChange={(e)=>props.change(e)}  checked={props.Basic.gender==="3"?true:false}  value="3" type="radio" />
                                    <label htmlFor="radio-2" className="radio-label">Female</label>
                                    </div>  
                                </div>
                                <Error error={props.error['gender']}/>
                              
                            </FormMargin>
                        </div>
                    </div>
                    {/* next */}
                    {props.BankId==='8'?
                    <HdfcTab HDFC={props.HDFC} hdfChange={props.change}/>:null
                    }
                    
                    <div className="col-md-12 text-center margin-topbtn">
                        <FormButton btnSubmit={props.btnSubmit} btnname="Next"/>     
                    </div>
                    <div className="col-md-12 padd0">
                    <BottomPara>I hereby Authorize Banks / NBFC’s to call / SMS / email me about the product and related services. This consent will override any DND /NDNC registration.</BottomPara>      
                    </div>
                    
                    
                </form>
                
    
            </Aux>
    
        )
    
   
})
export default Basic