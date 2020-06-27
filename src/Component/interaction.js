import React, { Component } from "react";
import { Form, FormGroup, Label, Col, Input, Button, Tag } from "reactstrap";
class Interaction extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Form>
          <FormGroup row>
            <Label htmlFor="firstname" md={2}>
              Category
            </Label>
            <Col md={7}>
              <Input
                type="select"
                id="firstname"
                name="firstname"
                placeholder="First Name"
              >
                <option>academic</option>
                <option>mentor</option>
                <option>faculty</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label md={2}>Details</Label>
            <Col md={7}>
              <Input type="textarea" placeholder="description" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 10, offset: 2 }}>
              <Button type="submit" color="danger">
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Interaction;
