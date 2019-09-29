import React from 'react';
import Card from './Card';
import movies from './store';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  createTable = (movies) => {
    let children = [] ;
    for (let i = 0; i < 10 ; i++) {
      children.push(<Card />)
    }
    return children ;
  }
  
  render() {
    return (
      <div className="App">
        { this.createTable() }
      </div>
    );
  }
}

export default App;

