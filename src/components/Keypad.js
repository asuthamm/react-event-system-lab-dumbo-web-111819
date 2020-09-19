import React from 'react';

class Keypad extends React.Component {

  handleInputPassword = () => {
    console.log('You are entering')
  }
  render() {  return (
      <div>
        <input type="password"
          onKeyUp={this.handleInputPassword} />
      </div>
    )
  }
}

export default Keypad;