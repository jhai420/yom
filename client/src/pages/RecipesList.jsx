import React, { useState, useEffect } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 20px 40px 20px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

// const Delete = styled.div`
//     color: #ff0000;
//     cursor: pointer;
// `

const UpdateRecipe = (props) => {

    const updateRecipe = event => {
        event.preventDefault()

        window.location.href = `/recipes/update/${props.id}`
    }

    
    return <Update onClick={updateRecipe}>Update</Update>
    
}

// DELETE RECIPE 
// const DeleteRecipe = (props) => {

//     const deleteRecipe = event => {
//         event.preventDefault()

//         if (
//             window.confirm(
//                 `Do you want to delete the recipe ${props.name} permanently?`,
//             )
//         ) {
//             api.deleteRecipeById(props.id)
//             window.location.reload()
//         }
//     }

//     return <Delete onClick={deleteRecipe}>Delete</Delete>
    
// }

const RecipesList = (props) => {
    
    const [recipe, setRecipe] = useState({
        recipes: [],
        columns: [],
        isLoading: false,
    });

    const componentDidMount = async () => {
        setRecipe({ isLoading: true })

        await api.getAllRecipes().then(recipes => {
            setRecipe({
                recipes: recipes.data.data,
                isLoading: false,
            })
        })
    }

    useEffect(() => {
        componentDidMount();
       }, []);

       

        const { recipes, isLoading } = recipe;

        const columns = [
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Ingredients',
                accessor: 'ingredients',
                Cell: props => <span>{props.value.join(' | ')}</span>,
            },
            {
                Header: 'Directions',
                accessor: 'directions',
                Cell: props => <span>{props.value.join(' | ')}</span>,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateRecipe id={props.original._id} name={props.original.name}/>
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        // if (!recipes.length) {
        //     showTable = false
        // }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={recipes}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={20}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    
}

export default RecipesList
