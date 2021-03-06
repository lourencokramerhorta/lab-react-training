import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    let word = '';
    const { lang, children } = this.props;
    switch (lang) {
      case 'de':
        word = 'Hallo';
        break;
      case 'fr':
        word = 'Bonjour';
        break;
      case 'it':
        word = 'Ciao';
        break;
    }
    return (
      <div className="greeting">
        <p>
          {word} {children}
        </p>
      </div>
    );
  }
}

export default Greetings;
