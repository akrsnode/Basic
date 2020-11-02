import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import UserData from './../data/UserData'

class User extends React.Component {
  // changeUser() {
  //   this.setState(userName)
  // }
  state = UserData.state.users
  
  render() {
    return(
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src={this.state.userName[0].logo}
          />
          <Card.Header>{this.state.userName[0].name}</Card.Header>
          <Card.Meta>{this.state.userName[0].title}</Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}

export default User;