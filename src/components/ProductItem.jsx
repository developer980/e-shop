import React from 'react';
import './ProductItem.css';
import { addToCart } from '../redux/actions/cart.js';
import {connect} from 'react-redux';

function ProductItem(props) {
    const {id, name, price, currency, image} = props;

    return(
        <div className="product-item col-12 col-md-3 d-flex flex-column align-items-center mb-5">
            <img src={image} alt="productPhoto" className="mb-2 border rounded"/>
            <p className="mb-1 text-center font-weight-normal">{ name }</p>
            <p className="text-center font-weight-light">{ price + currency }</p>

            <button 
            className = 'btn btn-outline-dark'
            onClick={()=> props.addToCart(
                {product:{
                    id,
                    name,
                    price,
                    currency,
                    image
                }}
            )}>
                Add to cart
            </button>
        </div>
    );
}

function mapDispatchToProps(dispatch){
    return{
        addToCart: (payload) => dispatch(addToCart(payload)),
    }
}

export default connect(null, mapDispatchToProps)(ProductItem);