import React, { Component } from "react";
import Header from "./HeaderComponent";
import Profile from "./ProfileComponent";
import ListOF from "./ListComponent";
import ComponentsList from "./componentlist";
import Home from "./HomeComponent";
import Academic from "./Academic";
import Notice from "./Notice";
import TimeTable from "./table";
import Interaction from "./interaction";

function ReanderComponent(props) {
  console.log(props.num);
  switch (props.num) {
    case 1:
      return <Academic componentnumber={1} />;
    case 2:
      return <Notice />;
    case 3:
      return <Academic componentnumber={2} />;
    case 4:
      return <TimeTable />;
    case 5:
      return <Home />;
    case 6:
      return <Home />;
    case 7:
      return <Home />;
    case 8:
      return <Home />;
    case 9:
      return <Interaction />;

    default:
      return <div />;
  }
}
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listComponent: null
    };
    this.SelectComponent = this.SelectComponent.bind(this);
  }

  SelectComponent(x) {
    this.setState({
      listComponent: x
    });
  }

  render() {
    console.log(this.state.listComponent);
    return (
      <div>
        <div className="container-fluied">
          <div className="row">
            <div className="col-12 col-md-12">
              <Header />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-3">
              <div className="row">
                <div className="col-12">
                  <Profile />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <ListOF data={{ compnum: this.SelectComponent, type: 1 }} />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <ReanderComponent num={this.state.listComponent} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
