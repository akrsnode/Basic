import { Button } from 'semantic-ui-react'
import User from './User';


function Header() {
  return(
    <div className="ui borderless main menu">
      <div className="ui container">
        <div className="item">
          <a className="ui header" href="index.html"><h1>Basic</h1></a>
          <a className="ui mini basic button version" href="https://github.com/vansmoe/Basic">ver 0.1</a>
        </div>
        <div className="item small"><Button icon='file' content='New file' /></div>
        <div className="ui right item" onFocus={(e) => console.log(e.currentTarget)}>
          <User />
        </div>
      </div>
    </div>
  )
}

export default Header;