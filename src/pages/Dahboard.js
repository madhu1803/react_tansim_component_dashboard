import React, { Component } from "react";
import Navibar from "../components/Navibar";
import Dalert from "../components/Dalert";

export default class Dahboard extends Component {
  render() {
    return (
      <div>
        {/* navbar */}
        <Navibar />
        <div className="body-container text-capitalize">
          {/* alert  */}
          <Dalert />
        </div>
      </div>
    );
  }
}
