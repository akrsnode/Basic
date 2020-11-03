import React from 'react';
import { Image } from 'semantic-ui-react';
import users from './../data/UserData'

class User extends React.Component {
  state = {
    user: users[0]
  }
    
  render() {
    return(
      <div className='user'>
        <img src={this.state.user.logo} />
        <h3 className="name">{this.state.user.name}</h3>
        <div className="title">{this.state.user.title}</div>
      </div>
    )
  }
}

export default User;