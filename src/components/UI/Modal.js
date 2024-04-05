import React, { useEffect, useRef, useContext } from 'react';
import { CartContext } from '../../store/CartContext'; 

const Modal = ({ isOpen, toggleModal }) => {
    const modalRef = useRef(null);
    const { cartItems } = useContext(CartContext); 

    useEffect(() => {
        if (isOpen) {
            modalRef.current.showModal(); 
        } else {
            modalRef.current.close(); 
        }
    }, [isOpen]);

   


    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const formattedPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(totalPrice);

    return ( 
        <dialog ref={modalRef} className="modal">
            <h2>Your cart</h2>
            <ul className="cart-items">
                {cartItems.map(item => (
                    <li key={item.id}>
                        <span>{item.name}</span> 
                        <span> - </span> 
                        <span>{item.quantity}</span> 
                    </li>
                ))}
            </ul>
            <p className="cart-total">{formattedPrice}</p> 
            <p className="modal-actions">
                <button className="text-button" onClick={toggleModal}>Close</button>
                <button className="text-button">Checkout</button>
            </p>
        </dialog>
    );
}

export default Modal;
