import React from "react";

export default function OutlineHeader(props) {
  let { title } = props;
  return (
    <div className="mt-5 outline-header">
      <p className="text-capitalize">
        <strong>{title} </strong>
        <span style={{ float: "right" }} className="text-muted">
          View All
        </span>
        <hr />
      </p>
      <br />
    </div>
  );
}
