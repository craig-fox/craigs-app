import React, { Component } from 'react';
import Filter from './Filter';
import PersonList from './PersonList';

class Display extends Component {
    constructor(){
        super();
        this.state = {
            persons: []
        };
        this.filter = this.filter.bind(this);
    }

    filter(url){
        this.callApi(url)
            .then(res => this.setState({ persons: res.express }))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.filter('everyone');
    }

    callApi = async (url) => {
        const response = await fetch('/' + url);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render(){
        return(
            <div>
                <div>
                    <h1>People</h1>
                    <Filter filter={this.filter}/>
                </div>
                <div>
                   <PersonList persons={this.state.persons} />
                </div>
            </div>
        )
    }
}

export default Display