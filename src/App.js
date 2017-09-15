import React, { Component } from 'react';
import { Provider } from 'react-redux'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import store from './store'
import Counter from './Counter'
import './App.css';

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
          <Counter/>
        </div>
      </Provider>
    );
  }
}

export default App;
