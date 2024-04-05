import React, { useState, useEffect } from 'react';
import MealItem from './MealItem'; // Import the MealItem component

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('http://localhost:3001/meals');
            const mealsData = await response.json();
            setMeals(mealsData);
        };

        fetchMeals();
    }, []);

    return (
        <ul id="meals" >
            {meals.map(meal => (
                <MealItem key={meal.id} meal={meal} /> // Pass meal data as props to MealItem component
            ))}
        </ul>
    );
};

export default Meals;
