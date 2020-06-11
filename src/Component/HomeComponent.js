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

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Card>
                {/* <CardImg
          top
          width="50%"
          height="100px"
          src="/assets/images/profile.png"
          alt="profilepic"
        /> */}
                <CardBody>
                  <CardTitle>Nirav</CardTitle>
                  <CardSubtitle>Student</CardSubtitle>
                  <CardText>
                    this is nirav sherasiya from morbi area of intrest MERN
                    stace developer Graphics deigner and data sciencetist
                  </CardText>
                  <Button className="btn btn-danger">SEE PROFILE</Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
