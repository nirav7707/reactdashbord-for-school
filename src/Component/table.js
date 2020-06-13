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
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">#</th>
          <td colSpan="5">
            <span className="lunchbreak">Lunch Break</span>
          </td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TimeTable;
