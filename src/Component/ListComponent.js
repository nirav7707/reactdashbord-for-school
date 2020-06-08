import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

function Car({ onClick }) {
  return (
    <ListGroupItem
      onClick={() => onClick(1)}
      color="danger"
      tag="button"
      action
    >
      Cras justo odio
    </ListGroupItem>
  );
}
function ListOF(props) {
  console.log(props.onClick);
  return (
    <div>
      <br />
      <div className="listoverflow">
        <ListGroup>
          <Car onClick={props.onClick} />
          <ListGroupItem color="danger" tag="button" action>
            Dapibus ac facilisis in
          </ListGroupItem>
          <ListGroupItem color="danger" tag="button" action>
            Morbi leo risus
          </ListGroupItem>
          <ListGroupItem color="danger" tag="button" action>
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem color="danger" tag="button" action>
            Vestibulum at eros
          </ListGroupItem>
          <ListGroupItem color="danger" tag="button" action>
            Cras justo odio
          </ListGroupItem>
          <ListGroupItem color="danger" tag="button" action>
            Dapibus ac facilisis in
          </ListGroupItem>
          <ListGroupItem color="danger" tag="button" action>
            Morbi leo risus
          </ListGroupItem>
          <ListGroupItem color="danger" tag="button" action>
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem color="danger" tag="button" action>
            Vestibulum at eros
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
}

export default ListOF;
