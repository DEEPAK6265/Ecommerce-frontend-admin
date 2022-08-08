import React from 'react'
import Table from 'react-bootstrap/Table';

function View() {
  return (
    <div>
    <Table responsive="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Reg</th>
          <th>Shop id</th>
          <th>Shop Name</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Pin</th>
          <th>Contact</th>
          <th>Owner</th>
          <th>Type</th>
          <th>Email</th>
          <th>URL</th>
          <th>GST</th>
          <th>Turnover</th>
          <th>Description</th>
          <th>Term Condition</th>
          <th>Status</th>
          <th>Password</th>
         
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>Kamal kirana</td>
          <td>Kolar</td>
          <td>Bhopal</td>
          <td>M.P.</td>
          <td>486002</td>
          <td>9858697858</td>
          <td>Sanjeev</td>
          <td>Electronic</td>
          <td>San@gmail.com</td>
          <td>uyp.www</td>
          <td>GT45FGT</td>
          <td>2000000</td>
          <td>Good</td>
          <td>Return unavailable</td>
          <td>Activated</td>
          <td>Sanj1234</td>
          
        </tr>
        </tbody>
      </Table>
      </div>
  )
}

export default View