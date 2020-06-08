import React, { Component } from "react";
import Header from "./HeaderComponent";
import Profile from "./ProfileComponent";
import ListOF from "./ListComponent";
import ComponentsList from "./componentlist";
import Home from "./HomeComponent";

function RenderMainBody(props) {
  return <p>Hello</p>;
}

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      components: ComponentsList
    };
  }

  SelectComponent(x) {}

  render() {
    console.log(this.state.selectedComponent);
    return (
      <div>
        <div className="container-fluied">
          <div className="row">
            <div className="col-12 col-md-12">
              <Header />
            </div>
          </div>
          <br />
          <div className="row" />
          <div className="col-md-3">
            <div className="row">
              <div className="col-12">
                <Profile />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <ListOF onClick={x => this.SelectComponent(x)} />
              </div>
            </div>
          </div>
          <div className="col-md-9" />
        </div>
      </div>
    );
    console.log(this.state.selectedComponent);
  }
}

export default Main;
