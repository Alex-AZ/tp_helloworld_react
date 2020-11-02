import React, { Component } from 'react';
import Table from './table';
import Form from './form';

class App extends Component { // "class" est un composant (composant est une zone où on définit le code)
    state = {
        persons: []
    };

    // Fonction qui permet de supprimer une personne du tableau par rapport à son index
    removePerson = (index) => {
        const {persons} = this.state; // équivalent : const persons = this.state.persons;

        this.setState({
            persons: persons.filter((person, i) => {
                return i !== index;
            })
        })
    }

    // Fonction qui permet de supprimer toutes les personnes du tableau
    deleteAllPerson = () => {
        this.setState({
            persons: []
        })
    }

    handleSubmit = (person) => {
        this.setState({persons: [...this.state.persons, person]})
    }

    render() {
        const {persons} = this.state; // équivalent : const persons = this.state.persons;

        return (
            <div className="App">
                <h1>HelloWorld!</h1>
                <Table
                    personData={persons}
                    removePerson={this.removePerson}
                    deleteAllPerson={this.deleteAllPerson}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;