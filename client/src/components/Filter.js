import React, { Component } from 'react';

class Filter extends Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const select = event.target.name;
        this.props.filter(select);
    }

    render(){
        return(
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td><a name="everyone" onClick={this.handleClick}>Everyone</a></td>
                        <td><a name="male" onClick={this.handleClick}>Male</a></td>
                        <td><a name="female" onClick={this.handleClick}>Female</a></td>
                        <td><a name="over30" onClick={this.handleClick}>Over 30</a></td>
                        <td><a name="under30" onClick={this.handleClick}>Under 30</a></td>
                    </tr>
                    </tbody>

                </table>

            </div>
        )
    }

}

export default Filter