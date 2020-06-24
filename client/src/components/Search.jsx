import React, {useState, useEffect} from "react";
import Recipe from "../components/Recipe";
import RecipeModal from "../components/RecipeModal";
import { MDBCol, MDBIcon } from "mdbreact";


function Search (props) {

    const [filtered, setFiltered] = useState();
        
    const handleSearch = (event) => {

    let currentList = [];
    let newList = [];

    if(event.target.value !== "") {
        currentList = props.recipes

        newList = currentList.filter(item => {
            const lc = item.name.toLowerCase();
            const filter = event.target.value.toLowerCase();
            return lc.includes(filter);
        })
        console.log('newList:', newList)
    } else {
        newList = props.recipes
    }
    setFiltered(newList);
    
    }

    useEffect(() => {
        setFiltered(props.recipes)
    }, [props.recipes]);

    if (!filtered || filtered.length === 0) {
        var isLoading = true;
    };
   


    return (
    <div>
        <div className="d-flex justify-content-center search-bar">
        <MDBCol md="6">
      <form className="form-inline mt-4 mb-4">
        <MDBIcon icon="search" />
        <input className="input form-control form-control-sm ml-3 w-75" type="text" onChange={handleSearch} placeholder="Search" aria-label="Search" />
      </form>
    </MDBCol>
    </div>
        
        {!isLoading && filtered.map((recipe) => (
        <RecipeModal key={recipe._id} id={recipe._id} name={recipe.name} ingredients={recipe.ingredients} directions={recipe.directions} link={recipe.link}/>
        ))} 
        
    </div>
    )
        

}

export default Search