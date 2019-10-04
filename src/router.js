import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Recipes from './components/Recipes'
import Add from './components/Add';


export default (
    <Switch>
        <Route exact path='/' component={Recipes} />
        <Route path='/add' component={Add} />
    </Switch>
)