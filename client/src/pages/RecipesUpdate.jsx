import React, { useState, useEffect } from 'react'
import api from '../api'

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

const RecipesUpdate = (props) => {

    const [recipe, setRecipe] = useState({
        id: props.match.params.id,
        name: '',
        ingredients: '',
        directions: '',
        link: '',
        tags: ''
    });

    const handleChange = async event => {
        const { name, value } = event.target;

        setRecipe(prevValue => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    }

    const handleUpdateRecipe = async () => {
        const { name, ingredients, directions, link, tags } = recipe;
        const id = props.match.params.id;
        const arrayIngredients = ingredients.split('|');
        const arrayDirections = directions.split('|');
        const payload = { name, ingredients: arrayIngredients, directions: arrayDirections, link, tags };

        await api.updateRecipeById(id, payload).then(res => {
            window.alert(`Recipe updated successfully`);
            setRecipe({
                name: '',
                ingredients: '',
                directions: '',
                link: '',
                tags: ''
            });
            window.location.href = `/`;
        })
    }

    useEffect(() => {
        const loadRecipeData = async () => {
            const id  = props.match.params.id;
            const recipeData = await api.getRecipeById(id)
    
            setRecipe({
                name: recipeData.data.data.name,
                ingredients: recipeData.data.data.ingredients.join('|'),
                directions: recipeData.data.data.directions.join('|'),
                link: recipeData.data.data.link,
                tags: recipeData.data.data.tags
            })
        };
        loadRecipeData();
       },[props.match.params.id]);

        return (
            <Wrapper>
                <Title>Update Recipe</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    name="name"
                    value={recipe.name}
                    onChange={handleChange}
                />

                <Label>Ingredients (separated by |): </Label>
                <TextArea
                    type="text"
                    name="ingredients"
                    rows="2"
                    value={recipe.ingredients}
                    onChange={handleChange}
                />

                <Label>Directions (separated by |): </Label>
                <TextArea
                    type="text"
                    name="directions"
                    rows="5"
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

                <Label>Tags (separated by a space): </Label>
                <InputText
                    type="text"
                    name="tags"
                    value={recipe.tags}
                    onChange={handleChange}
                />

                <Button onClick={handleUpdateRecipe}>Update Recipe</Button>
                <CancelButton href={'/'}>Cancel</CancelButton>
            </Wrapper>
        )
    }

export default RecipesUpdate
