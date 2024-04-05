import React, { useContext } from 'react';
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import { CartContext } from '../store/CartContext';

const Header = () => {
    const { cartItems } = useContext(CartContext); // Use useContext hook to access cartItems from CartContext
    console.log(cartItems);
    const handleButtonClick = () => {
        // Handle button click event
       
    }
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly onClick={handleButtonClick}>Cart ({cartItems.length})</Button>
            </nav>
        </header>
    )
}

export default Header