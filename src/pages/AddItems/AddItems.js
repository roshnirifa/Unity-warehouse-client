import React from 'react';
import { Form } from 'react-bootstrap';

const AddItems = () => {


    const handleAddItems = e => {
        e.preventDefault();
        const productName = e.target.productName.value;
        const supplierName = e.target.supplierName.value;
        const price = e.target.price.value;
        const email = e.target.email.value;
        const imgUrl = e.target.imgUrl.value;
        const description = e.target.description.value;
        console.log(productName, supplierName, price, email, imgUrl, description);
        const url = 'http://localhost:5000/addItems';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                productName, supplierName, price, email, imgUrl, description
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                e.target.reset();
            });

    }
    return (
        <div className='form mx-auto my-5' >
            <Form onSubmit={handleAddItems} className='w-75 mx-auto mt-4'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='mt-3'>Product Name</Form.Label>
                    <Form.Control type="text" name='productName' placeholder="Product name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Supplier Name</Form.Label>
                    <Form.Control type="text" name='supplierName' placeholder="Supplier name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name='price' placeholder="price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>img</Form.Label>
                    <Form.Control type="text" name='imgUrl' placeholder="img url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name='description' rows={3} />
                </Form.Group>
                <div className='text-center'>
                    <input type="submit" className='btn btn-primary w-75 ' value="submit" />
                </div>
            </Form>
        </div>
    );
};

export default AddItems;