import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for (const product of cart){
        total = total + product.price;
    }
    let tax = (total*.2);
    let shipping = (total*.05);
    let grandTotal = total + tax + shipping;
   
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items Ordered :{props.cart.length} </h4>
            <hr></hr>
            <h4>Total : {total.toFixed(2)}$</h4>
            <h4>Tax: {tax.toFixed(2)}$</h4>
            <h4>Shipping : {shipping.toFixed(2)}$</h4>
            <h3>Grand Total :{grandTotal.toFixed(2)}$ </h3>
            
        </div>
    );
};

export default Cart;