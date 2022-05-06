import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllProducts = ({ product }) => {
    const { id, name, img, price, description, quantity, suplier } = product;
    const navigate = useNavigate()
    const handleUpdate = (id) => {
        navigate(`/manageItmes/${id}`)
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
            <button onClick={() => handleUpdate(id)} className='btn btn-primary w-50'> Update</button>
        </div>

    );
};

export default AllProducts;