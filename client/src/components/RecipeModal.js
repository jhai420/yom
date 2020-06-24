import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import styled from 'styled-components';


function RecipeModal(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  const updateRecipe = event => {
      event.preventDefault()

      window.location.href = `/recipes/update/${props.id}`
  }

  const directionsList = props.directions
  const ingredientsList = props.ingredients

  return(

    <>
    <Button className="btn-note" onClick={handleShow}>
            {props.name}
    </Button>
    <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3>Ingredients:</h3>
        <ul>
          {ingredientsList.map((ingredient) => 
          (<li>{ingredient}</li>))}
        </ul>
       
        <h3>Directions:</h3>
        <ol>
          {directionsList.map((direction) => 
          (<li>{direction}</li>))}
        </ol>
        <a target="blank" href={props.link}>Link</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateRecipe}>
            Update
          </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
};

export default RecipeModal;
