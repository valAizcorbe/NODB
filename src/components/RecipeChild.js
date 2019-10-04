import React, { Component } from 'react';
import axios from 'axios';

class RecipeChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            editInput: props.element
        }
    }

    edit = () => {
        const { editing } = this.state;
        this.setState({
            editing: !editing
        })
    }

    save = () => {
        const index = this.props.index;
        const newItem = this.state.editInput;
        axios
            .put(`/api/list`, { index, newItem })
            .then(res => this.props.updateState(res.data));
        this.setState({
            editing: false
        })
    }

    render() {
        return (
            <div>
                {this.state.editing ? (
                    <div>
                        <input value={this.state.editInput} name="editInput" onChange={e => this.handleInput(e)} />
                        <button onClick={() => this.save()}>Update</button>
                    </div>
                ) : (
                        <div>
                            <section>{this.props.element}</section>
                            <button onClick={() => this.edit()}>Edit</button>
                            <button onClick={() => this.props.delete(this.props.index)}>Delete</button>
                        </div>
                    )}

            </div>
        )
    }
}

export default RecipeChild;