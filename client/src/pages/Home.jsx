import React, { useState, useEffect } from 'react';
import api from '../api';
import Search from '../components/Search';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

function Home() {

    const [recipe, setRecipe] = useState({
        recipes: [],
        isLoading: false,
    });

    const loadRecipes = async () => {
        setRecipe({ isLoading: true })

        await api.getAllRecipes().then(recipes => {
            setRecipe({
                recipes: recipes.data.data,
                isLoading: false,
            })
        })
    }

    useEffect(() => {
        loadRecipes()
       }, []);

    const { recipes, isLoading } = recipe;
    if (!isLoading) {
    var name  = recipes.map((recipe) => recipe.name);
    var id = recipes.map((recipe) => recipe._id);
    }

    return (
        <Search recipes={recipes} name={name} isLoading={isLoading} id={id}/>
        )

}

export default Home;