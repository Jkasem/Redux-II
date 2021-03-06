import React, { Component } from 'react';
import './App.css';
import Friends from './Friends';
import AddFriend from './AddFriend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><span className="App-logo">LFB</span>LambdaFriendBook</h1>
        </header>
        <Friends />
        <AddFriend />
      </div>
    );
  }
}

export default App;
