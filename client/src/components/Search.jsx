import React, {useState, useEffect} from "react";
import RecipeModal from "../components/RecipeModal";
import { MDBCol } from "mdbreact";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Search (props) {

    const [filtered, setFiltered] = useState();
        
    const handleSearch = (event) => {

    let currentList = [];
    let newList = [];

    if(event.target.value !== "") {
        currentList = props.recipes

        newList = currentList.filter(item => {
            const lc = item.tags.toLowerCase();
            const filter = event.target.value.toLowerCase();
            return lc.includes(filter);
        });
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
        <div className="find-recipe justify-content-center">
            <MDBCol>
            <h1 className="recipe">Find a recipe</h1>
            <div className="form-group position-relative">
                <input className="form-control input-bg" type="text" onChange={handleSearch} placeholder="Search..." aria-label="Search" />
                <i className="fa fa-search fa-lg position-absolute"></i>
            </div>
            </MDBCol>
        </div>
        <Container>
            <Row className="justify-content-center text-center">
            <Col xs={8} className="mx-auto">
                {!isLoading && filtered.map((recipe) => (
                <RecipeModal key={recipe._id} id={recipe._id} name={recipe.name} ingredients={recipe.ingredients} directions={recipe.directions} link={recipe.link} tags={recipe.tags}/>
                ))} 
            </Col>
            </Row>
        </Container>
    </div>
    )
        

}

export default Search