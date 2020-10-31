import { Button } from 'semantic-ui-react'

function Header() {
  return(
    <div className="ui borderless main menu">
      <div className="ui container">
        <a className="item header" href="index.html"><h1>Basic</h1></a>
        <div className="item"><a className="ui mini basic button version" href="https://github.com/vansmoe/Basic">ver 0.1</a></div>
        <div className="item"><Button icon='file'/>New file</div>
        <div className="ui right item">User here</div>
      </div>
    </div>
  )
}

export default Header;