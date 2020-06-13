import React, { Component } from "react";
import { Badge } from "reactstrap";
import { notices } from "./noticelist";

class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notices
    };
    this.handleclass = this.handleclass.bind(this);
  }
  handleclass(x) {
    console.log(x);
    let classvalue = "badge m-2 ";
    classvalue += x ? "badge-danger" : "badge-light";
    return classvalue;
  }

  render() {
    const noticesA = this.state.notices.map(notice => (
      <div>
        <Badge key={notice.id} className={this.handleclass(notice.danger)}>
          <h5> {notice.notice}</h5>
        </Badge>
      </div>
    ));
    return <React.Fragment>{noticesA}</React.Fragment>;
  }
}

export default Notice;
