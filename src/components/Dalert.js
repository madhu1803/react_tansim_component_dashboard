import React from "react";
import { Alert } from "react-bootstrap";
import { GiSandsOfTime } from "react-icons/gi";

export default function Dalert() {
  return (
    <Alert variant="danger">
      <GiSandsOfTime style={{ fontSize: "25px" }} />
      <small className="text-dark">
        Please wait for 3-4 working days.
        <br />
        After finished{" "}
        <span className="text-danger text-uppercase">verification</span>
        .we'll call you soon.
      </small>
    </Alert>
  );
}
