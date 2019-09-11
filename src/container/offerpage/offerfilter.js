import React,{ useState }  from 'react';
import Aux from '../../HOC/aux';


function OfferFilter(props){
    const [data] = useState(['Travel','Shopping','Fuel','Movies','Dining']);
    let ActiveFilter=props.cardType;
    return(
        <Aux>
            <ul className="ul-offerpage clearfix">
                {data.map((curr,index)=>{
                    for(var i=0;i<ActiveFilter.length;i++){
                        if(ActiveFilter[i]===curr){
                            return(
                                <li className="activefilter" key={index}>
                                <div className={`bgfilter_icon bg_icon${index+1}`}></div>
                                    <div className="checkfileter">
                                    <input type="checkbox" id="checkbox-1-1" name={curr} defaultChecked={true}   className="regular-checkbox" onClick={(e)=>props.checkClick(e)} />
                                    <label>{curr}</label>
                                </div>
                            </li>    
                            )
                        }
                    }
                    return(
                            <li  key={index}>
                                <div className={`bgfilter_icon bg_icon${index+1}`}></div>
                                    <div className="checkfileter">
                                    <input type="checkbox" id="checkbox-1-1" name={curr} onClick={(e)=>props.checkClick(e)}  defaultChecked={false}   className="regular-checkbox" />
                                    <label>{curr}</label>
                                </div>
                            </li> 
                    )
                })
            }

                
            </ul>
            
        </Aux>
    )
}
export default OfferFilter