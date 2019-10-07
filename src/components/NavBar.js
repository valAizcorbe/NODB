import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-header">
      <h1>EasyRecipe</h1>
      <Link to="/">Recipes </Link>
      <Link to="/add"> Add</Link>
    </div>
  );
};

export default NavBar;
