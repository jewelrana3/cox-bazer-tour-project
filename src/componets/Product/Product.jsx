import React from 'react';
import './Product.css'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'




const Product = ({ product }) => {
    
      
    const { tag, description, dollar_amount, rating, pic } = product;
    
    return (
        <div>
            <div className='product d-flex '>
                <img style={{ width: '150px', borderRadius: '5px' }} src={pic} alt="" />
                <div className='ms-4'>
                    <h6>{tag}</h6>
                    <p>{description}</p>

                    <div className='d-flex'>
                        <Rating style={{ maxWidth: 100 }} value={rating} /><span className='ms-2 rating'>{rating}</span>
                        <span className='doller'>${dollar_amount}</span>
                    </div>

                </div>

            </div>
           
        </div>
    );
};

export default Product;