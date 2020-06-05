import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';

class App extends Component {
  constructor(props)
  {
      super(props);
      this.state = {input:[]};
  }
  
  render() {
    const {input} = this.state;

    return (
      <div className="App">
        <h1 className = "h1-color">&#x1F697; Welcome to City Search! &#x1F697;</h1>
        <div className="inputline">
          <span className = "input-line">Please type in a city: </span><input></input>
          {/* <button class="btn btn-success" onClick= { ()=>this.submit() }> Enter </button> */}
        </div>
        <Search input = "New York"/>
      </div>
    );
  }
}

export default App;