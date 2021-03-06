import React, { Component } from 'react';

function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class Random extends Component {
  render() {
    return (
      <div>
        <p>
          Random value between {this.props.min} and {this.props.max}:{' '}
          {getRandom(this.props.max, this.props.min)}
        </p>
      </div>
    );
  }
}

export default Random;
