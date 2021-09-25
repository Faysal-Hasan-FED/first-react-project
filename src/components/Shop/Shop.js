import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])

    const handlePurchaseButton =(product)=>{
        const newCart =[...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
            {
                products.map(product => <Product key={product.key} handlePurchaseButton={handlePurchaseButton} product={product}/>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
            
        </div>
    );
};

export default Shop;