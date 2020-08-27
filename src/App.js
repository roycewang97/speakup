import React, {Component} from 'react';
import './App.css';

import Content from "./components/content/Content";
import Menu from "./components/menu/Menu";

class App extends Component {
  
  render() {
    return <div className="app-container">
      <Menu/>
      <Content/>
    </div>
  }
}

export default App;
