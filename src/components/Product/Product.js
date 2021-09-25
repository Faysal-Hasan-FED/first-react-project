import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {name,seller,price,img,stock} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="product">
            <div>
                <img src={img} alt="image of a product" />
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <p><small>By {seller}</small></p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <h5>Only for {price}$</h5>
                <button onClick={()=>props.handlePurchaseButton(props.product)} className="regular-button">{cartIcon}Add to cart</button>
                <br></br>
            </div>
        </div>
    );
};

export default Product;