import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase_init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    console.log(
        user
    );
    const handleItemsDelete = id => {
        const confirm = window.confirm("Are you sure you want to delete");
        if (confirm) {

            console.log("deleting seletcd", id);


            fetch(`http://localhost:5000/myItems/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("deleted successfully");
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining)
                    }
                })

        }

    }
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myItems/${user?.email}`)
            .then(response => response.json())
            .then(data => setItems(data))

    }, [user?.email])

    return (
        <div className='container'>
            <h1 className='text-center my-3'> My Items </h1>

            <div className='table '>
                <Table striped bordered hover>
                    <thead className=' table-head'>
                        <tr>
                            <th>Product Name</th>
                            <th>Supplier Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Img</th>
                            <th>delete</th>

                        </tr>
                    </thead>
                    {
                        items.map(item => (
                            <tbody>
                                <tr>
                                    <td>{item.productName}</td>
                                    <td>{item.supplierName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.price}</td>
                                    <td><img style={{ height: "80px" }} src={item.imgUrl} alt="" /></td>
                                    <td >
                                        <button onClick={() => handleItemsDelete(item._id)} className='btn btn-primary ' style={{ width: "100px" }}>Delete</button>
                                    </td>

                                </tr>

                            </tbody>


                        ))
                    }
                </Table>
            </div>

        </div>
    );
};

export default MyItems;