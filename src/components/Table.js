import React from 'react';
import TableItem from './TableItem.js';

class Table extends React.Component {
  render() {
    return(
      <div className="ui container">
        <h4 className="ui top attached block header">Wyceny:</h4>
        <table className="ui bottom attached table selectable">
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Cena</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
              <TableItem />
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;