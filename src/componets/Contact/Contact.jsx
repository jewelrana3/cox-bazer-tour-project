import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';


const Contact = () => {
    const location = useLoaderData()
    console.log(location)
    return (
        <div>
            {
              location.map(data => <Product
              key={data.tag}
              product={data}
              ></Product>)
            }
          

        </div>
    );
};

export default Contact;