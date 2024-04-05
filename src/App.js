import React, { useReducer,useState }  from 'react';
import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from './components/UI/Modal';
import { CartProvider } from './store/CartContext';
import ReactDOM from 'react-dom';



const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); 
    console.log('toggle')
};
 return (
  <CartProvider > 
       
    <Header openModal={toggleModal} /> 
    <Meals />
    {ReactDOM.createPortal( 
                <Modal isOpen={isModalOpen} toggleModal={toggleModal} />, 
                document.getElementById('modal')
            )}
    </CartProvider>
  );
}

export default App;
