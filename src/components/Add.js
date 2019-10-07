import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Recipes from "./Recipes";

class Add extends Component {
  constructor(props) {
    super();
    this.state = {
      recipes: [{}],
      index: 0,
      title: "",
      ingredients: [],
      steps: [],
      newIngredient: "",
      newStep: ""
    };
  }
  addRecipe = () => {
    const addOn = {
      title: this.state.title,
      ingredients: this.state.ingredients,
      steps: this.state.steps
      // url: this.state.url
    };
    axios.post("/api/recipe", { addOn }).then(res =>
      this.setState({
        recipes: res.data,
        title: "",
        ingredients: [],
        steps: []
      })
    );
  };

  addIngredient = () => {
    this.setState({
      ingredients: [...this.state.ingredients, this.state.newIngredient]
    });
  };

  addStep = () => {
    this.setState({
      steps: [...this.state.steps, this.state.newStep]
    });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    console.log(this.state, "hit");
    return (
      <div className="background">
        <div className="add-container">
          <input
            name="title"
            className="title-input"
            placeholder="Meal name"
            value={this.state.input}
            onChange={e => this.handleInput(e)}
          />
          <p className="form-wrap">
            <input
              name="newIngredient"
              className="input"
              placeholder="Ingredients"
              value={this.state.input}
              onChange={e => this.handleInput(e)}
            />
            <button className="add-button" onClick={this.addIngredient}>
              Add
            </button>
            <input
              name="newStep"
              className="input"
              placeholder="Steps"
              value={this.state.input}
              onChange={e => this.handleInput(e)}
            />
            <button className="add-button" onClick={this.addStep}>
              Add
            </button>
            {/* <input
              type="url"
              name="url"
              id="url"
              placeholder="https://example.com"
              pattern="https://.*"
              size="30"
              required
            /> */}
            <br />
            <button className="add-all-button" onClick={this.addRecipe}>
              Add it all!{" "}
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Add;
