import React from 'react';
import { Accordion } from 'react-bootstrap';

export default function Checkout(props) {
    return (
        <Accordion defaultActiveKey='0' className='checkout-form'>
            <Accordion.Item eventKey='0'>
                <Accordion.Header className={props.step1 ? 'active': ''}>SignIn</Accordion.Header>
                <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
                <Accordion.Header className={props.step1 ? 'active': ''}>Shipping address</Accordion.Header>
                <Accordion.Body>
                    <form><input type="text" placeholder="first name"></input></form>
                    <form><input type="text" placeholder="last name"></input></form>
                    <form><input type="text" placeholder="street address"></input></form>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
                <Accordion.Header className={props.step1 ? 'active': ''}>Delivery</Accordion.Header>
                <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
                <Accordion.Header className={props.step1 ? 'active': ''}>Payment</Accordion.Header>
                <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='4'>
                <Accordion.Header className={props.step1 ? 'active': ''}>Review order</Accordion.Header>
                <Accordion.Body></Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}