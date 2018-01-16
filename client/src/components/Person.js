import React, {Component} from 'react';

class Person extends Component{
    render(){
        const leftStyle = {
            textAlign: 'left'
        };
        return (
            <li style={leftStyle}>{this.props.person.name} {this.props.person.age}</li>
        )
    }
}

export default Person