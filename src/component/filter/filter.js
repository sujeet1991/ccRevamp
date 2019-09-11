import React,{useState} from 'react';

import './filter.css';
import Aux from '../../HOC/aux';

function Example(props) {
    
    const [data] = useState(['Travel','Shopping','Fuel','Movies','Dining']);
    let Checkcative= props.checkActive;
    
    
  
    return(
      <Aux>
           <ul className="filter-con clearfix" >
          {
           
              data.map((curr,index)=>{
                let namedata=curr;
                // if(index===1){
                //   namedata="Shopping"
                // }else if(index===4){
                //   namedata="Dining"
                // }else{
                //   namedata=curr
                // }
               
                  if(Checkcative.length>0){
                     for(let i=0;i<Checkcative.length;i++){
                         if(curr===Checkcative[i]){
                             return (
                                <li className="active" key={index}>
                                <div className={`iconfilter one${index+1}`}></div>
                
                                <div className="checkfileter">
                                    <input type="checkbox" id="checkbox-1-1" defaultChecked={true} name={curr} onClick={(e)=>props.checkClick(e)} className="regular-checkbox" />
                                    <label>{namedata}</label>
                                </div>
                            </li>
                             )
                         }
                     } 
                  }
                  return(
                   
                    <li className="" key={index}>
                        <div className={`iconfilter one${index+1}`}></div>
        
                        <div className="checkfileter">
                            <input type="checkbox" id="checkbox-1-1" name={curr} onClick={(e)=>props.checkClick(e)} className="regular-checkbox" />
                            <label>{namedata}</label>
                        </div>
                    </li>
               
                  )
              })
          }
        </ul>
      </Aux>
    )
  }
// function filter(){
//     //const [data, setsdata] = useState(0);
//     return (
       
//           
     
//     )
// }
export default Example
