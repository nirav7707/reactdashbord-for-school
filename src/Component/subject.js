import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { sem1 } from "./subjectlist";
function CardRender(props) {
  return (
    <div className="col-md-6 ">
      <Card className="afterhover">
        <CardBody className="mx-2 ">
          <CardTitle>
            <strong>
              <h2>{props.subject.subject}</h2>
            </strong>
          </CardTitle>
          <CardSubtitle>subject code: {props.subject.subjectcode}</CardSubtitle>
          <CardSubtitle>cradit: {props.subject.cradit}</CardSubtitle>
          <CardText>facltyname: {props.subject.facltyname}</CardText>
        </CardBody>
      </Card>
      <br />
    </div>
  );
}

class Subject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subjectlist: sem1
    };
  }
  render() {
    const sublist = this.state.subjectlist.map(subject => (
      <CardRender subject={subject} />
    ));

    return (
      <div className="container-fluied ">
        <h1 className="subjectheader">
          {" "}
          <bold>SEMESTER {this.props.num} SUBJECT</bold>{" "}
        </h1>
        <div className="row">{sublist}</div>
      </div>
    );
  }
}

export default Subject;
