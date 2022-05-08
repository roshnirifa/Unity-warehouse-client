import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../../useProduct/useProduct'
import Product from '../Product/Product';
import './Inventory.css'

const Inventory = () => {
    const { products } = useProduct();
    return (
        <div className=' container'>
            <h1 className='text-center' >Inventory</h1>
            <div className='products-container'>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='text-center'>
                <Link to='/manageItems' className='btn btn-primary mt-5'>All Inventory</Link>
            </div>
        </div>
    );
};

export default Inventory;