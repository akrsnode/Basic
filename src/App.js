import React from 'react';
import Header from './components/Header';
import Table from './components/Table';
import Menu from './components/Menu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuVisible: false };
  }

  toggleMenu() {
    this.setState(state => ({menuVisible: !state.menuVisible}));
  }
  
  render() {
    return (
      <div>
        <Header />
        {this.state.menuVisible && <Menu />}
        <Table />
      </div>
    );
  }
}

export default App;