import React, { Component } from 'react';

class Form extends Component {
    initialState = {
        firstname: "",
        lastname: "",
        job: ""
    };

    state = this.initialState;

    handleChange = (event) => {
        const {name, value} = event.target;
        
        this.setState({
            [name]: value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const {firstname, lastname, job} = this.state;

        return (
            <form onSubmit={this.submitForm}>
                <label htmlFor="firstname">Prénom</label>
                <input type="text" name="firstname" id="firstname" required value={firstname} onChange={this.handleChange} />
                <label htmlFor="lastname">Nom</label>
                <input type="text" name="lastname" id="lastname" required value={lastname} onChange={this.handleChange} />
                <label htmlFor="job">Métier</label>
                <input type="text" name="job" id="job" required value={job} onChange={this.handleChange} />
                <input type="submit" value="Ajouter" />
            </form>
        );
    }
}

export default Form;