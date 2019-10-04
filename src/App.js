import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import router from './router';
import Recipes from './components/Recipes';
import RecipeChild from './components/RecipeChild';


function App() {

  return (
    <div>
      <HashRouter>
        <div className="App">
          <NavBar />
          {router}
        </div>
      </HashRouter>
      <Recipes />
      <RecipeChild />
    </div>
  );
}


export default App;
