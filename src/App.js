import React, { Component } from 'react';
import './App.css';
import SearchComponent from './Components/SearchComponent/SearchComponent';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchComponent />
      </React.Fragment>
    );
  }
}

export default App;
