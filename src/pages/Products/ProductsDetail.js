import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../useProduct/useProduct';


const ProductsDetail = () => {
    const { setRender } = useProduct();
    const { inventoryId } = useParams();
    const [data, setdata] = useState({});
    const [restock, setRestock] = useState(null);
    const handleRestock = id => {
        setRender(false)
        axios.put(`https://glacial-dawn-25251.herokuapp.com/restockQuantity/${id}`, { quantity: restock })
            .then(data => {
                setRender(true)

                alert("data updated")

            })

            .catch(error => {
                setRender(false)
            })

    }

    const handleDelivered = id => {
        setRender(false)
        axios.put(`https://glacial-dawn-25251.herokuapp.com/delivered/${id}`)
            .then(data => {
                setRender(true)

                alert("delivered");

            })
            .catch(error => {
                setRender(false)
            })
    }

    useEffect(() => {
        fetch(`https://glacial-dawn-25251.herokuapp.com/product/${inventoryId}`)
            .then(res => res.json())
            .then(data => {
                setdata(data);
            })
    }, [inventoryId])



    return (
        <div className='mt-5 py-1'>
            <div className='product container w-50 mt-5 '>
                <div className='product-img'>
                    <img src={data.img} alt="" />
                </div>
                <h2>{data.name}</h2>
                <h5>supplier name: {data.suplier}</h5>
                <p>Price: {data.price}</p>
                <p>Quantity : {data.quantity}</p>

                <p><small>{data.description}</small></p>
                <button onClick={() => handleDelivered(data._id)} className='btn btn-primary w-50'> Delivered</button><br />


                <div className='mt-3'>
                    <input onChange={(e) => setRestock(e.target.value)} className='mx-2' type="number" style={{ width: '55px' }} />
                    <button onClick={() => handleRestock(data._id)} className='btn btn-primary ' style={{ width: "100px" }}>Restock</button>
                </div>

            </div>
        </div>



    );
};

export default ProductsDetail;