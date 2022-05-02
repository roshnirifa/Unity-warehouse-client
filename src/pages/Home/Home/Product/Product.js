import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, price, description, quantity, suplier } = product
    return (
        <div>

            <div className='product container'>
                <div className='product-img'>
                    <img src={img} alt="" />
                </div>
                <h2>{name}</h2>
                <h5>supplier name: {suplier}</h5>
                <p>Price: {price}</p>
                <p>Quantity : {quantity}</p>

                <p><small>{description}</small></p>
                <button className='btn btn-primary px-5' > Update</button>
            </div>
        </div>
    );
};

export default Product;