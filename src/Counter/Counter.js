import React, { Component } from 'react';
import { connect } from 'react-redux'

import { increase, incrementAsync } from '../store/reducers/counter.js'

class Counter extends Component {

  render() {
    let {
      value,
      processing
    } = this.props;

    return (
      <div>
        <h2>{value}</h2>
        <button 
          type='button' 
          className='btn btn-outline-primary'
          onClick={this.props.increase}
        >
          Add
        </button>
        <button 
          type='button' 
          className='btn btn-outline-primary ml-1'
          onClick={this.props.incrementAsync}
        >
          Async Add (by saga)
        </button>
      </div>
    );
  }
}

export default connect(
  state => state.counter, {
    increase,
    incrementAsync
  }
)(Counter);
