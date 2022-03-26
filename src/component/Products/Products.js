import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const [cart, setCart]=useState([])
    const addToCart= (props) =>{
        const newCart = [...cart, props];
        setCart(newCart);
    }
     const removeBtn = () =>{
        setCart([])
     }
 
    return (
        <div className='main-container'>
            <h2 className='heading'>Laptop Bazar</h2>
        <div className='products'>
            <div className="producut-container">
            {
                products.map(product=><Product 
                    product={product}
                    key={product.id}
                    addToCart ={addToCart}
                    ></Product>)
            }
            </div>
            <div className="cart-container">
            <h3 className='selected-laptop'>Selected Laptop</h3>
                {
                    cart.map(cart=> <Cart
                         carts={cart}
                         key={cart.id}
                    
                    ></Cart>)
                }
                  <button onClick={removeBtn} className='remove-btn'>remove all items</button>
            </div>
        </div>
        </div>
    );
};

export default Products;