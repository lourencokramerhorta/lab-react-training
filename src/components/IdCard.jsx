import React, { Component } from 'react';

class IdCard extends Component {
  render() {
    const { firstName, picture, birth, height, gender, lastName } = this.props;
    console.log(birth);
    return (
      <div className="container">
        <img className="cardImg" src={picture}></img>
        <div>
          <p className="cardText">
            <span className="bold">First name: </span> {firstName}
          </p>
          <p className="cardText">
            <span className="bold">Last name: </span>
            {lastName}
          </p>
          <p className="cardText">
            <span className="bold">Gender: </span> {gender}
          </p>
          <p className="cardText">
            <span className="bold">Height: </span> {height}cm
          </p>
          <p className="cardText">
            <span className="bold">Birth: </span>
            {birth.toLocaleDateString()}
          </p>
        </div>
      </div>
    );
  }
}
export default IdCard;
