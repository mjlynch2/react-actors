import React, { Component } from 'react'; // Object destructuring

class Contact extends Component { // classes mass produce objects
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            LastName: '',
            bestImpression: '',
            sentence: ''
        }
    }

    handleFirst = ((e) => {
        this.setState({ firstName: e.target.value })
    })
    
    handleLast = ((e) => {
        this.setState({ lastName: e.target.value })
    })
    
    handleChange = ((e) => {
        this.setState({ bestImpression: e.target.value,
            sentence: <span>{this.state.firstName} {this.state.lastName}'s best impression is {this.state.bestImpression}</span>})
    })

    render() {
        return (
            <div>
                <h2>Contact</h2>
                <p>PHONE: 1800-WEREACT</p>
                <input id="firstName" onChange={this.handleFirst}></input><input id="lastName" onChange={this.handleLast}></input><input id="bestImpression" onChange={this.handleChange}></input>
                <p>{this.state.sentence}</p>
            </div>
        );
    }
}

export default Contact;
