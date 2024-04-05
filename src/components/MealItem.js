import Button from "./UI/Button";

const MealItem = (props) => {

    const formattedPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(props.meal.price);

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
                <Button onClick={() => console.log('Add to Cart clicked')}>Add to Cart</Button>
               </p>
            </article>
        </li>
        
    )
}

export default MealItem