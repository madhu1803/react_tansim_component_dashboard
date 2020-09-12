import React from "react";
import { Card } from "react-bootstrap";

export default function Ecard(props) {
  let { title, subtitle, text, subtext, time } = props;
  return (
    <div className="col-lg-4 mb-4">
      <Card className="card-container text-capitalize card2">
        <Card.Body className="mt-2">
          <Card.Title className="card2-title">{title}</Card.Title>
          <Card.Subtitle className="text-muted">{subtitle}</Card.Subtitle>
          <Card.Text>
            <p className="main-text">
              <strong>{text}</strong>
            </p>
            <small>{subtext}</small>
            <br />
            <small className="text-muted">{time}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
