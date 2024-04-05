import React, { useContext } from 'react';
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";

const MealItem = (props) => {
    const formattedPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(props.meal.price);

    const { addItem } = useContext(CartContext); // Use useContext hook to access addItem function from CartContext

    const handleAddToCart = () => {
        addItem(props.meal); // Call addItem function to add item to the cart
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