import React from 'react';

class User extends React.Component {
  constructor() {
    super();
    this.state = {userName: ['Adrian', 'Adam']};
  }

  changeUser() {
    this.setState(userName)
  }
  
  render() {
    return(
      <h3>{this.state.userName[0]}</h3>
    )
  }
}

export default User;