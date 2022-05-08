import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, img, price, description, quantity, suplier } = product;
    const navigate = useNavigate()
    const handleUpdate = (id) => {
        navigate(`/inventory/${_id}`)
    }
    return (

        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <h2>{name}</h2>
            <h5>supplier name: {suplier}</h5>
            <p>Price: {price}</p>
            <p>Quantity : {quantity}</p>

            <p><small>{description}</small></p>
            <button onClick={() => handleUpdate(_id)} className='btn btn-primary w-50'> Update</button>
        </div>



    );
};

export default Product;