import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import users from './../data/UserData'

class User extends React.Component {
  state = {
    id: null,
    user: null
  }
  
  changeUser(ind) {
    this.setState({
      id: ind,
      user: users[ind] 
    })
  }

  componentDidMount() {
    this.changeUser(1);
    console.log(this.state)
  }
  
  render() {
    return(
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            //src={this.state.userName[0].logo}
          />
          <Card.Header></Card.Header>
          <Card.Meta></Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}

export default User;