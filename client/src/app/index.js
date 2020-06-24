import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from '../components';
import { RecipesList, RecipesInsert, RecipesUpdate, Home} from '../pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


function App() {
    return (
        
        <Router>
            <NavBar />
            <Switch>
            <div className="main">
                <Route path="/" exact component ={Home} />
                <Route path="/recipes/list" exact component={RecipesList} />
                <Route path="/recipes/create" exact component={RecipesInsert} />
                <Route
                    path="/recipes/update/:id"
                    exact
                    component={RecipesUpdate}
                />
                </div>
            </Switch>
        </Router>
            
        
    )
}

export default App
