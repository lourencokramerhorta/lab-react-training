import React, { Component } from 'react';

class BoxColor extends Component {
  
  getStyles = (r, g, b) => {
    return {
      backgroundColor: `rgb(${r},${g},${b})`,
      height: '50px',
      width: '200px',
    };
  };

  render() {
    return (
      <div
        style={this.getStyles(this.props.r, this.props.g, this.props.b)}
      ></div>
    );
  }
}

export default BoxColor;
