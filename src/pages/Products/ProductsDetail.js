import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductsDetail = () => {

    const { inventoryId } = useParams();
    const [data, setdata] = useState({});

    const handleDelivered = id => {
        axios.put(`http://localhost:5000/delivered/${id}`)
            .then(data => {
                console.log(data.data);
            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/product/${inventoryId}`)
            .then(res => res.json())
            .then(data => {
                setdata(data);
            })
    }, [inventoryId])



    return (
        <div className='product container w-50'>
            <div className='product-img'>
                <img src={data.img} alt="" />
            </div>
            <h2>{data.name}</h2>
            <h5>supplier name: {data.suplier}</h5>
            <p>Price: {data.price}</p>
            <p>Quantity : {data.quantity}</p>

            <p><small>{data.description}</small></p>
            <button onClick={() => handleDelivered(data._id)} className='btn btn-primary w-50'> Delivered</button><br />
            <div className='mt-5'>
                <input className='mx-2' type="number" style={{ width: '55px' }} />
                <button className='btn btn-primary ' style={{ width: "100px" }}>Restock</button>
            </div>
        </div>



    );
};

export default ProductsDetail;