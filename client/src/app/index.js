import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


import { NavBar, Footer } from '../components';
import { RecipesList, RecipesInsert, RecipesUpdate, Home, Contact} from '../pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
    return (
        <>
        <Router>
            <NavBar />
            
            <Switch>
                <Route path="/" exact component ={Home} />
                <Container>
                <div className="main">
                <Route path="/recipes/list" exact component={RecipesList} />
                <Route path="/recipes/create" exact component={RecipesInsert} />
                <Route
                    path="/recipes/update/:id"
                    exact
                    component={RecipesUpdate}
                />
                <Route path="/contact" exact component={Contact} />
                </div>
                </Container>
            </Switch>
        </Router>
        <Footer />
        </>


            
        
    )
}

export default App
