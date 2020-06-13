import React, { Component } from "react";
import { Line, Bar } from "react-chartjs-2";
import Subject from "./subject";

class ExamMarks extends Component {
  render() {
    const data = {
      labels: ["subject1", "subject2", "subject3", "subjet4"],
      datasets: [
        {
          label: "Mid semester",
          data: [25, 30, 20, 0],
          borderColor: [
            "rgba(220,53,69,0.3)",
            "rgba(220,53,69,0.3)",
            "rgba(220,53,69,0.3)",
            "rgba(220,53,69,0.3)"
          ],
          backgroundColor: [
            "rgba(220,53,69,0.3)",
            "rgba(220,53,69,0.3)",
            "rgba(220,53,69,0.3)",
            "rgba(220,53,69,0.3)"
          ],
          pointBackgroundColor: "rgba(220,53,69,0.3)",
          pointBorderColor: "rgba(220,53,69,0.3)"
        },
        {
          label: "end semester",
          data: [15, 10, 30, 18.5],
          borderColor: [
            "rgba(220,200,69,0.3)",
            "rgba(220,200,69,0.3)",
            "rgba(220,200,69,0.3)",
            "rgba(220,200,69,0.3)"
          ],
          backgroundColor: [
            "rgba(220,200,69,0.3)",
            "rgba(220,200,69,0.3)",
            "rgba(220,200,69,0.3)",
            "rgba(220,200,69,0.3)"
          ],
          pointBackgroundColor: "rgba(220,200,69,0.3)",
          pointBorderColor: "rgba(220,200,69,0.3)"
        }
      ]
    };
    return (
      <div>
        <h1>Semester {this.props.num} marks </h1>

        <br />
        <Bar data={data} />
      </div>
    );
  }
}

export default ExamMarks;
