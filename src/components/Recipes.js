import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          title: "",
          ingredients: [],
          steps: []
        }
      ],
      index: 0,
      editing: false,
      newTitle: "",
      newIngredient: "",
      newStep: ""
    };
  }

  componentDidMount() {
    axios.get("/api/recipe").then(res => {
      this.setState({
        recipes: res.data
      });
    });
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  edit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  };

  delete = index => {
    axios.delete(`api/recipe/${index}`).then(res =>
      this.setState({
        recipes: res.data
      })
    );
  };

  updateState = updatedRecipe => {
    this.setState({
      recipes: updatedRecipe
    });
  };

  save = id => {
    console.log(id);

    let newRecipe = {
      title: this.state.newTitle,
      ingredients: this.state.newIngredient,
      steps: this.state.newStep
    };
    axios
      .put(`/api/recipe`, { newRecipe, id })
      .then(res => this.updateState(res.data));
    this.setState({
      editing: false
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleNext = () => {
    if (this.state.index < this.state.recipes.length - 1) {
      this.setState({ index: this.state.index + 1 });
    }
  };

  handlePrevious = () => {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    }
  };
  render() {
    console.log(this.state.recipes);
    const { recipes, index } = this.state;
    const { editing } = this.state;
    if (!this.state.editing) {
      return (
        <div className="container">
          <div className="display-c" onClick={() => this.edit()}>
            <div className="inside-title">{recipes[index].title}</div>
            <ul>
              <li>{recipes[index].ingredients[0]}</li>
              <li>{recipes[index].ingredients[1]}</li>
              <li>{recipes[index].ingredients[2]}</li>
              <li>{recipes[index].ingredients[3]}</li>
            </ul>
            <div className="inside">{recipes[index].steps}</div>

            {/* <div className="inside">{recipes[index].url}</div> */}
          </div>
          <div className="button-section">
            <button
              className="button-sides"
              onClick={this.handlePrevious}
            >{`⇜`}</button>

            <button
              className="button-center"
              onClick={() => this.edit(index)}
              onChange={this.handleChange}
            >
              ✎
            </button>
            <button
              className="button-center"
              onClick={() => this.delete(this.props.index)}
            >
              ✖
            </button>
            <button
              className="button-sides"
              onClick={this.handleNext}
            >{` ⇝`}</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="container-edit">
            <input
              name="newTitle"
              value={this.state.newTitle}
              onChange={this.handleInput}
              placeholder="title"
            />
            <input
              name="newIngredient"
              value={this.state.newIngredient}
              onChange={this.handleInput}
              placeholder="ingredient"
            />
            <input
              name="newStep"
              value={this.state.newStep}
              onChange={this.handleInput}
              placeholder="step"
            />
            <div className="button-section">
              <button
                className="add-button"
                onClick={() => this.save(recipes[index].id)}
              >
                Save ⇵
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Recipes;
