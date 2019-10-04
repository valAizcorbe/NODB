import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import RecipeChild from './RecipeChild'

class Recipes extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],

        }
    }

    componentDidMount = () => {
        axios.get('/api/recipe').then(res =>
            this.setState({
                recipes: res.data
            })
        )
    }

    handleInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };


    delete = (index) => {
        axios.delete(`api/list/${index}`).then(res =>
            this.setState({
                recipes: res.data
            }))
    }

    updateState = (updatedRecipe) => {
        this.setState({
            recipes: updatedRecipe
        })
    }

    handleNext = () => {
        if (this.state.index < this.state.data.length - 1) {
            this.setState({ index: this.state.index + 1 })
        }
    }

    handlePrevious = () => {
        if (this.state.index > 0) {
            this.setState({ index: this.state.index - 1 })
        }
    }

    render() {
        return (
            <div className="container">
                <div>
                    {this.state.recipes.map((element, index) => {
                        return (
                            <RecipeChild
                                element={element}
                                index={index}
                                key={`Recipe ${index}`}
                                delete={this.delete}
                                update={this.updateState} />
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default Recipes;