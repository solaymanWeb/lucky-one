import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {product, addToCart}=props;
    const {name, price, picture}= product;


    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className="cart-info">
                <h4>Name: {name}</h4>
                <p>Price: ${price}</p>
            </div>
            <button onClick={()=>addToCart(product)}  className='btn-cart'>Add to Cart
            <FontAwesomeIcon className='cart-icon' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};


export default Product;
