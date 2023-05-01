import React, { useState } from 'react';
import bg1 from '../images/Rectangle1.png'
import { Button, Form } from 'react-bootstrap';
import './News.css'
import "react-datetime/css/react-datetime.css";


const News = () => {

    const handleForm=e=>{
        e.preventDefault()
    }
   
    return (
        <div className='image d-flex ' style={{ backgroundImage: `url(${bg1})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', opacity: '5' }}>
            <div className='text'>
                <h1 className='w-20 h-10'>Cox's bazar</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla modi delectus aliquid! Numquam </p>
                <p>voluptate mollitia officia nostrum corrupti ipsam, aspernatur itaque vitae veritatis quae reiciendis </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum ea impedit perspiciatis laborum </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum ea impedit perspiciatis laborum </p>
                <p> Esse rerum ea impedit perspiciatis laborum </p>
            </div>
            <div className='from-tag'>
                <Form onSubmit={handleForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control type="text" placeholder="Location" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Destanation</Form.Label>
                        <Form.Control type="text" placeholder="Destanation" />
                    </Form.Group>

                    <Button  variant="primary" type="submit">
                        Start Booking
                    </Button>
                </Form>
                
            </div>
        </div>
    );
};

export default News;