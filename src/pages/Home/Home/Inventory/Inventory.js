import React from 'react';
import useProduct from '../../../useProduct/useProduct'
import Product from '../Product/Product';
import './Inventory.css'

const Inventory = () => {
    const [products] = useProduct();
    return (
        <div className=' w-75 mx-auto'>
            <h1 className='text-center' >Inventory</h1>
            <div className='products-container'>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Inventory;