import React, { Component } from 'react';
import { connect } from 'react-redux'

import { increment, incrementAsync } from '../store/reducers/counter.js'

class Counter extends Component {

  render() {
    let {
      value,
      processing
    } = this.props;

    return (
      <div className='container mt-5'>

        <div className="row align-items-center justify-content-center">
          <h1 className='col-12'>{value}</h1>
          <button 
            type='button' 
            className='col-md-3 col-sm-12 btn-lg btn-outline-primary'
            onClick={this.props.increment}
          >
            Add
          </button>
          <button 
            type='button' 
            className='col-md-3 col-sm-12 btn-lg btn-outline-primary ml-1'
            onClick={this.props.incrementAsync}
          >
            Async Add (by saga)
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.counter, {
    increment,
    incrementAsync
  }
)(Counter);
