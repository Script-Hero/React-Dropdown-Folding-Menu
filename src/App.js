import React, { Component } from 'react';
import Menu from './components/menu/menu.js';

class App extends Component {
  render() {

    var menu_items = [
      {text : "value1", href : 'https://example.com'},
      {text : 'value2', href : 'https://example.net'}
    ];

    return (
      <Menu items={menu_items}></Menu>
    );
  }
}

export default App;
