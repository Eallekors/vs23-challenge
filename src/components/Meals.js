import React, { useState, useEffect } from 'react';

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('http://localhost:3001/meals');
                if (!response.ok) {
                    throw new Error('Failed to fetch meals');
                }
                const mealsData = await response.json();
                console.log(mealsData); // Log meal data to console
                setMeals(mealsData);
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        };

        fetchMeals();
    }, []);

    return null; // Render nothing in the UI
};

export default Meals;
