import React, { Component } from "react";
import Navibar from "../components/Navibar";
import Dalert from "../components/Dalert";
import OutlineHeader from "../components/OutlineHeader";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import CRcard from "../components/CRcard";
export default class Dahboard extends Component {
  render() {
    return (
      <div>
        {/* navbar */}
        <Navibar />
        <div className="body-container text-capitalize">
          {/* alert  */}
          <Dalert />
          <div className="row">
            <div className="col-lg-8">
              <OutlineHeader title="connection request" />
              <div className="row">
                <div className="col-lg-4">
                  <CRcard isShadow={true} />
                </div>
                <div className="col-lg-4">
                  <CRcard />
                </div>
                <div className="col-lg-4">
                  <CRcard />
                </div>
                <div className="col-lg-4">
                  <CRcard />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
