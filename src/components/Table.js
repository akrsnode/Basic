import React from 'react';
import TableItem from './TableItem.js';

class Table extends React.Component {
  render() {
    return(
      <div className="ui container">
        <h4 className="ui top attached block header">Wyceny:</h4>
        <table className="ui attached table">
          <thead>
            <tr className="d-flex-jst-spbt">
              <th>Nazwa</th>
              <th>Cena</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableItem />
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;