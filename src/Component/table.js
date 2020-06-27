import React from "react";
import { Table } from "reactstrap";

const TimeTable = props => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thrusday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Maths</td>
          <td>CN</td>
          <td>COA</td>
          <td>JAVA</td>
          <td>DSA</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Maths</td>
          <td>CN</td>
          <td>COA</td>
          <td>JAVA</td>
          <td>DSA</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Maths</td>
          <td>CN</td>
          <td>COA</td>
          <td>JAVA</td>
          <td>DSA</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Maths</td>
          <td>CN</td>
          <td>COA</td>
          <td>JAVA</td>
          <td>DSA</td>
        </tr>

        <tr>
          <th scope="row">5</th>
          <td>Maths</td>
          <td>CN</td>
          <td>COA</td>
          <td>JAVA</td>
          <td>DSA</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TimeTable;
