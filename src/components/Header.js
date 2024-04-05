import React, { useContext, useRef } from 'react';
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import Modal from './UI/Modal';
import { CartContext } from '../store/CartContext';

const Header = ({ openModal}) => {
    const { cartItems } = useContext(CartContext); // Use useContext hook to access cartItems from CartContext

    console.log(cartItems)
    const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);


    
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly onClick={openModal}>Cart ({totalCount})</Button>
            <Modal  />
            </nav>
        </header>
    )
}

export default Header