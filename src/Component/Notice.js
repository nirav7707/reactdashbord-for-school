import React, { Component } from "react";
import { Badge } from "reactstrap";
import { notices } from "./noticelist";

class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notices
    };
  }

  render() {
    const noticesA = this.state.notices.map(notice => (
      <div>
        <Badge key={notice.id} className="badge m-2 p-2 badge-danger">
          <h5> {notice.notice}</h5>
        </Badge>
      </div>
    ));
    return <React.Fragment>{noticesA}</React.Fragment>;
  }
}

export default Notice;
