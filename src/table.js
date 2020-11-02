import React, { Component } from 'react';

const THead = () => {
    return (
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Métier</th>
                <th>Supprimer</th>
            </tr>
        </thead>
    );
}

/* Pour le paramètre d'une constante simple on doit mettre soit rien soit "props" */
const TBody = (props) => { 
    const tableRows = props.personData.map((person, index) => {
        return (
            <tr key={index}> {/* "key" > obligatoire */}
                <td>{person.lastname}</td>
                <td>{person.firstname}</td>
                <td>{person.job}</td>
                <td>
                    <button onClick={() => props.removePerson(index)}>Supprimer</button>
                </td>
            </tr>
        );
    });

    return (
        <tbody>{tableRows}</tbody>
    );
}

class Table extends Component {
    render() {
        const {personData, removePerson, deleteAllPerson} = this.props;
        // équivalent :
        // const personData = this.props.personData;
        // const removePerson = this.props.removePerson;
        // const deleteAllPerson = this.props.deleteAllPerson;

        return (
            <div>
                <table>
                    <THead />
                    <TBody personData={personData} removePerson={removePerson} />
                </table>
                <button onClick={() => deleteAllPerson()}>Supprimer tous</button>
            </div>
        );
    }
}

export default Table;