import React from 'react';

const Product = ({product}) => {
    const {tag,description,dollar_amount,rating} = product;
    return (
        <div>
            <h4>{tag}</h4>
            <p>{description}</p>
            <div>
                <span>{dollar_amount}</span>
                <span>{rating}</span>
            </div>
        </div>
    );
};

export default Product;