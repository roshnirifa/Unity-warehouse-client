import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useProduct from '../useProduct/useProduct';
import './ManageItems.css'



const ManageItems = () => {
    const [restock, setRestock] = useState(null);
    const handleRestock = id => {
        axios.put(`http://localhost:5000/restockQuantity/${id}`, { quantity: restock })
            .then(data => {
                alert("data updated")

            })

    }
    const handleDelete = id => {
        axios.delete(`http://localhost:5000/manageItems/${id}`)
            .then(data => {
                alert("data deleted")
            })
    }

    const handleDelivered = id => {
        axios.put(`http://localhost:5000/delivered/${id}`)
            .then(data => {
                console.log(data.data);
            })
    }


    const { products, setRender } = useProduct();
    const navigate = useNavigate()
    const handleAddNewItem = () => {
        navigate('/addItems')
    }
    return (
        <div className='container'>
            <h1 className='text-center mt-5'>Manage Inventory</h1>

            <div className='text-center'>
                <button onClick={handleAddNewItem} className='btn btn-outline-danger mb-5 mt-2'> Add New Item</button>
            </div>
            <div className='table'>
                <Table striped bordered hover>
                    <thead className=' table-head'>
                        <tr>
                            <th>Product Name</th>
                            <th>Supplier Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Img</th>
                            <th >quantity</th>
                            <th>Delivar</th>
                            <th>Restock</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {
                        products.map(product => (
                            <tbody key={product._id}>
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.suplier}</td>
                                    <td>{product.email}</td>
                                    <td>{product.price}</td>
                                    <td><img style={{ height: "80px" }} src={product.img} alt="" /></td>
                                    <td className='text-center' >{product.quantity}
                                    </td>
                                    <td >
                                        <button onClick={() => handleDelivered(product._id)} className='btn btn-primary ' style={{ width: "100px" }}>delivery</button>
                                    </td>
                                    <td >
                                        <input onChange={(e) => setRestock(e.target.value)} className='mx-2' type="number" style={{ width: '55px' }} />
                                        <button onClick={() => handleRestock(product._id)} className='btn btn-primary ' style={{ width: "100px" }}>Restock</button>
                                    </td>
                                    <td >
                                        <button onClick={() => handleDelete(product._id)} className='btn btn-primary ' style={{ width: "100px" }}>Delete</button>
                                    </td>
                                </tr>

                            </tbody>


                        ))
                    }
                </Table>
            </div>

        </div >
    );
};

export default ManageItems;