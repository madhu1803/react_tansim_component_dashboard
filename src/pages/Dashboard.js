import React, { Component } from "react";
import Navibar from "../components/Navibar";
import Dalert from "../components/Dalert";
import OutlineHeader from "../components/OutlineHeader";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import CRcard from "../components/CRcard";
import Hcard from "../components/Hcard";

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
              {/* cards 1 */}
              <OutlineHeader title="connection request" />
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <CRcard isShadow={true} />
                </div>
                <div className="col-md-6 col-lg-4">
                  <CRcard />
                </div>
                <div className="col-md-6 col-lg-4">
                  <CRcard />
                </div>
                <div className="col-md-6 col-lg-4">
                  <CRcard />
                </div>
              </div>
              <OutlineHeader title="deals list" />
              <Hcard isShadow={true} />
              <Hcard />
              <Hcard />
              <Hcard />
              <OutlineHeader title="schemes list" />
              <Hcard isShadow={true} />
              <Hcard />
              <Hcard />
              <Hcard />
            </div>
            {/* cards 1 */}
            <div className="col-lg-4 d-none d-lg-block">
              <Sidebar />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
