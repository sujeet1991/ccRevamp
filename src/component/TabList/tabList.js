import React from 'react';

const tabList=(props)=>{
    return(
        <div className="change_card nav_tab" style={{marginBottom:'0px'}}>
                         {/* active_done  disabled_nav*/}
                    <ul className="nav_menu">
                            <li className={props.active_menu}><span>1</span> Basic</li>
                            <li className={props.active_done}> <span>2</span> Personal</li>
                            <li className={props.disabled_nav} > <span>3</span> Communication </li>
                        </ul>
                    </div>  
    )
};
export default tabList;