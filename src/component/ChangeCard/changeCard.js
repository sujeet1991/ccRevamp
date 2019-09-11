import React from 'react';
import {Link} from 'react-router-dom';
import Aux from '../../HOC/aux';
import './changeCard.css';


const changeCard=(props)=>{
    return(
        <Aux>
            <div className="change_card">
                <div className="col-md-12 padd0">
                    <div className="col-md-8 col-xs-12">
                        <div className="cart_img" style={{"backgroundImage":`url(https://s3.ap-south-1.amazonaws.com/product-bucket-user/creditcards/images/${props.image})`}}></div>
                        <h2 className="card_name">{props.name}</h2>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <Link to="/Offerpage" className="changeCardLink">Change Card</Link>
                    </div>
                </div>
            </div>
        </Aux>

    )
}

export default changeCard;