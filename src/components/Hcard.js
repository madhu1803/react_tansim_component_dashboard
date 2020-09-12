import React from "react";
import { BiCalendarEvent, BiCheckCircle } from "react-icons/bi";

export default function Hcard(props) {
  let { isShadow } = props;
  return (
    <div
      className={`card mb-3 text-capitalize hcard ${
        isShadow ? "shadow bg-white rounded" : null
      }`}
    >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            className="card-img"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">AWS one year free services</h5>
            <p className="card-text">AWS user group - chennai</p>
            <p className="card-text">
              <small className="text-muted">
                <BiCalendarEvent className="icon" />
                Thurs 14th oct 2019.
              </small>
            </p>
            <small style={{ float: "right" }}>
              <BiCheckCircle className="icon" />
              AWS group
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
