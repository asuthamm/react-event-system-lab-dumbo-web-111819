import React from 'react';

class EyesOnMe extends React.Component {

  onFocus = () => console.log('Good!')
  onBlur  = () => console.log('Hey! Whare are you going?')

  render() { return (
      <button onFocus={this.onFocus} onBlur={this.onBlur}>
        Click me, please!
      </button>
    )
  }
}

export default EyesOnMe;

