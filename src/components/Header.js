import { Button, Menu, Icon } from 'semantic-ui-react'
import User from './User';


function Header() {
  return(
    <Menu secondary>
      <Menu.Item>
        <h1>Basic</h1>
        <a className="btn-ver" href="https://github.com/vansmoe/Basic">ver 0.1</a>
      </Menu.Item>
      <Menu.Item position='right'>
        <Button.Group>
          <Button animated='vertical'>
            <Button.Content hidden>New file</Button.Content>
            <Button.Content visible><Icon name='file' /></Button.Content>
          </Button>
          <Button animated='vertical'>
            <Button.Content hidden>Sync</Button.Content>
            <Button.Content visible><Icon name='sync' /></Button.Content>
          </Button>
          <Button animated='vertical'>
            <Button.Content hidden>Edit</Button.Content>
            <Button.Content visible><Icon name='edit' /></Button.Content>
          </Button>
        </Button.Group>
      </Menu.Item>
      <Menu.Item>
      <Button.Group>
          <Button disabled animated='vertical'>
            <Button.Content hidden>Copy</Button.Content>
            <Button.Content visible><Icon name='copy' /></Button.Content>
          </Button>
          <Button disabled animated='vertical'>
            <Button.Content hidden>Delete</Button.Content>
            <Button.Content visible><Icon name='eraser' /></Button.Content>
          </Button>
          <Button disabled animated='vertical'>
            <Button.Content hidden>Fav</Button.Content>
            <Button.Content visible><Icon name='star' /></Button.Content>
          </Button>
        </Button.Group>
      </Menu.Item>
      <Menu.Item
        position='right'
        content={<User />}
      />
    </Menu>
  )
}

export default Header;