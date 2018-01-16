import React, { Component } from 'react';
import Person from './Person'

class PersonList extends Component{
    render(){
        const persons = this.props.persons;
        return (
            <div>
                <ul>
                {persons.map(person => (
                    <Person key={person._id} person={person} />
                ))}
                </ul>
            </div>
        )
    }
}

export default PersonList