import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import { ComponentsList } from "./componentlist";
import { sem } from "./Sem";

class ListOF extends Component {
  constructor(props) {
    var x;
    super(props);
    if (props.data.type === 2) {
      x = sem;
    } else {
      x = ComponentsList;
    }
    this.state = {
      listcom: x
    };
  }

  render() {
    const list = this.state.listcom.map(list => {
      return (
        <ListGroupItem
          onClick={() => this.props.data.compnum(list.id)}
          color="danger"
          tag="button"
          action
        >
          {list.name}
        </ListGroupItem>
      );
    });
    return (
      <div>
        <br />
        <div className="listoverflow">
          <ListGroup>{list}</ListGroup>
        </div>
      </div>
    );
  }
}

export default ListOF;
