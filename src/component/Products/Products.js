import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='main-container'>
            <h2 className='heading'>Laptop Bazar</h2>
        <div className='products'>
            <div className="producut-container">
            {
                products.map(product=><Product 
                    product={product}
                    key={product.id}
                    ></Product>)
            }
            </div>
            <div className="cart-container">
                <h3 className='selected-laptop'>Selected Laptop</h3>
            </div>
        </div>
        </div>
    );
};

export default Products;