import React, { useContext } from 'react';
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";

const MealItem = (props) => {
    const formattedPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(props.meal.price);

    const { addToCart } = useContext(CartContext); // Use useContext hook to access addToCart function from CartContext

    const handleAddToCart = () => {
        // Call addToCart function with the meal data
        addToCart(props.meal);
        console.log(props.meal);
    };   
   

    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div>
                    <h3>{props.meal.name}</h3>
                    <p className="meal-item-price">{formattedPrice}</p>
                    <p className="meal-item-description">{props.meal.description}</p>
                </div>
                <p>
                <Button onClick={handleAddToCart}>Add to Cart</Button>
               </p>
            </article>
        </li>
        
    )
}

export default MealItem