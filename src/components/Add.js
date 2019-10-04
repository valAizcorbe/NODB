import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Add extends Component {
    constructor(props) {
        super();
        this.state = {
            recipes: []
        }
    }
    addRecipe = () => {
        const addOn = this.state.input;
        axios.post('/api/list', { addOn }).then(res =>
            this.setState({
                recipes: res.data,
                input: ""
            }))
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <div className='background'>
                <header className='App'>

                </header>
                <input
                    className='title-input'
                    placeholder="What are you cooking?"
                    value={this.state.input}
                    onChange={e => this.handleInput(e)}
                />
                <p className="form-wrap">
                    <input
                        className="input"
                        placeholder="Ingredients"
                        value={this.state.input}
                        onChange={e => this.handleInput(e)}
                    />
                    <input
                        className="input"
                        placeholder="Steps"
                        value={this.state.input}
                        onChange={e => this.handleInput(e)}
                    />
                    <input
                        className="input"
                        placeholder='URL'
                        value={this.state.input}
                        onChange={e => this.handleInput(e)}
                    />

                    <button className="add-button" onClick={this.addRecipe}>
                        Add! </button>
                </p>
            </div>
        )
    }

}

export default Add;