import React, { useState } from 'react';
import api from '../api';

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const TextArea = styled.textarea.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn`,
})`
    margin: 15px 15px 15px 5px;
`

const RecipesInsert = () => {
     const [recipe, setRecipe] = useState({
        name: '',
        ingredients: '',
        directions: '',
        link: '',
     });
    

    const handleChange = async event => {
        const { name, value } = event.target;

        setRecipe(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    const handleIncludeRecipe = async () => {
        const { name, ingredients, directions, link } = recipe;
        const arrayIngredients = ingredients.split('|');
        const arrayDirections = directions.split('|');
        const payload = { name, ingredients: arrayIngredients, directions: arrayDirections, link };

        await api.insertRecipe(payload).then(res => {
            window.alert(`Recipe successfully added`)
            setRecipe({
                name: '',
                ingredients: '',
                directions: '',
                link: '',
            })
            window.location.href = `/`;
        })
    }

    return (
            <Wrapper>
                <Title>Add Recipe</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    name="name"
                    value={recipe.name}
                    onChange={handleChange}
                />

                <Label>Ingredients (separated by |):</Label>
                <TextArea
                    type="text"
                    rows="2"
                    name="ingredients"
                    value={recipe.ingredients}
                    onChange={handleChange}
                />

                <Label>Directions (separated by |): </Label>
                <TextArea
                    type="text"
                    rows="5"
                    name="directions"
                    value={recipe.directions}
                    onChange={handleChange}
                />

                <Label>Image URL: </Label>
                <InputText
                    type="text"
                    name="link"
                    value={recipe.link}
                    onChange={handleChange}
                />

                <Button variant="light" onClick={handleIncludeRecipe}>Add Recipe</Button>
                <CancelButton href={'/'}>Cancel</CancelButton>
            </Wrapper>
        )
    
}

export default RecipesInsert
