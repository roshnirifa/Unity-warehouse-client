import React from 'react';
import img from './img/Warehouse-Banner.png';
import img1 from './img/mt-1508-home-img1.jpg'
import './Banner.css'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='mb-5'>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100 opacity-50" src={img} />
                    <Carousel.Caption className='mb-5'>
                        <h1 className='text-black'>Distribution, Storage, Warehousing & Fulfillment</h1>
                        <div className='text-center fw-bold'>
                            <p className='text-black mt-4 '>Your solution for first class warehousing services for the goods, food, grocery, pharmaceutical and general commodity industries..</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>

            <div className='d-flex container align-items-center '>
                <div className='w-50 p-4'>
                    <h1>Unity Warehousing & Stroage</h1>
                    <p>We are a recognized premier logistics provider warehouse services in the North Dhaka. We offer our customers convenience, flexibility, and cost-effective service.
                        At UNITY, we offer the expert warehousing and storage services that your freight is carefully handled, properly inventoried and stored at the required temperature in our state-of-the-art facilities.</p>
                </div>
                <div className='w-50 p-4'>
                    <img style={{ height: '400px' }} src={img1} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Banner;