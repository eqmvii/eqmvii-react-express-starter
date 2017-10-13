import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props); // required in the constructor of a React component
    this.state = { data: "No request/response from the server yet..." };

    // bind this for use in below callback
    // Not using an arrow function to preserve readability 
    var that = this;

    // test connection to the server by fetching data to display
    fetch('/test')
      .then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          return "Error: Tried, but failed, to get data from the server.";
        }
      })
      .then(function (res) {
        console.log(res);
        that.setState({ data: res });
      })
  }

  render() {
    return (
      <div className="App">
        <p>Hello, world! React is rendering this JSX code.</p>
        <p>Server response: {this.state.data} </p>
      </div>
    );
  }
}

export default App;
