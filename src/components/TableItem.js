import React from 'react';
import calcs from './../data/Calcs';
class TableItem extends React.Component {
  render() {
    console.log(calcs);
    return(
      <tr>
        <td>Szafa maki</td>
        <td>4765zł</td>
        <td>2.10.2020 16:34</td>
      </tr>
    )
  }
}

export default TableItem;