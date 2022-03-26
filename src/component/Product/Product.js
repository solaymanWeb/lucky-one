import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, id, price, picture}=props.product;

    const addToCart = ()=>{
        console.log(addToCart);
    }

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className="cart-info">
                <h4>Name: {name}</h4>
                <p>Price: ${price}</p>
            </div>
            <button onClick={addToCart}  className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;