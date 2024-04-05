// Modal.js
import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, toggleModal, children }) => { // Pass toggleModal function from parent component
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            modalRef.current.showModal(); // Open the modal if isOpen is true
        } else {
            modalRef.current.close(); // Close the modal if isOpen is false
        }
    }, [isOpen]);

   

    return ( 
        <dialog ref={modalRef} className="modal">
            <h2>Your cart</h2>
            <ul className="cart-items">
                {children}
            </ul>
            <p className="cart-total"></p>
            <p className="modal-actions">
                {/* Close button sets isModalOpen to false */}
                <button className="text-button" onClick={toggleModal}>Close</button>
                <button className="text-button">Checkout</button>
            </p>
        </dialog>
    );
}

export default Modal;
