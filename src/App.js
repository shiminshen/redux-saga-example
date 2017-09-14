import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <h1>Redux Saga Example</h1>
          </div>
          <p className="App-intro">
            This is a example for redux-saga
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
