import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function RecipeModal(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateRecipe = event => {
      event.preventDefault()

      window.location.href = `/recipes/update/${props.id}`
  };


  const removeClass = () => {
    const buttonsArray = document.querySelectorAll('.btn-primary');
    buttonsArray.forEach(node => {
      node.classList.remove('btn-primary');
    });
  };

  return(

    <>
    <Button className="btn-note" onLoad={removeClass} onClick={handleShow}>
    <figure>
      <img src={props.link} alt={props.name}/>
    </figure>
      <div className="background"></div>
    <div className="recipe-title">{props.name}</div>
    </Button>
    <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3>Ingredients:</h3>
        <ul>
          {props.ingredients.map((ingredient, index) => 
          (<li key={index}>{ingredient}</li>))}
        </ul>
       
        <h3>Directions:</h3>
        <ol>
          {props.directions.map((direction, index) => 
          (<li key={index}>{direction}</li>))}
        </ol>
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
