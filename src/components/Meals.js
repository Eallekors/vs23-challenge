import React, { useState, useEffect } from 'react';

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('http://localhost:3001/meals');
            const mealsData = await response.json();
            console.log(mealsData); 
            setMeals(mealsData);
        };

        fetchMeals();
    }, []);

    return null; 
};

export default Meals;
