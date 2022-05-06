import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProduct from '../useProduct/useProduct';


const ManageItems = () => {
    const [products] = useProduct();
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
            <div >
                {
                    products.map(product => (<div className=''>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Supplier Name</th>
                                    <th>Email</th>
                                    <th>Price</th>

                                    <th><input type="number" placeholder='quantity' className='w-50 ' /></th>

                                    <th>
                                        <button className='btn btn-primary ' style={{ width: "100px" }}>delivery</button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>{product.name}</td>
                                    <td>{product.suplier}</td>
                                    <td>{product.email}</td>
                                    <td>{product.price}</td>
                                </tr>


                            </tbody>
                        </Table>
                    </div>

                    ))
                }
            </div>

        </div>
    );
};

export default ManageItems;