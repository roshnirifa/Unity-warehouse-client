import React from 'react';
import { useNavigate } from 'react-router-dom';
import AllProducts from '../AllProducts/AllProducts';
import useProduct from '../useProduct/useProduct';

const ProductsDetail = () => {
    const [products] = useProduct();
    return (
        <div className='container'>
            <h1 className='text-center mt-5' >All Product</h1>
            <div className='products-container'>
                {
                    products.map(product => <AllProducts
                        key={product.id}
                        product={product}
                    ></AllProducts>)
                }
            </div>
        </div>
    );
};

export default ProductsDetail;