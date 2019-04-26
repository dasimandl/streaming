import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import ChannelList from './ChannelList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ChannelList />
      </div>
    );
  }
}

export default App;
