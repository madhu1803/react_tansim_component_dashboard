import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsCircleFill } from "react-icons/bs";
export default function CRcard(props) {
  let { isShadow } = props;
  return (
    <Card
      className={`text-capitalize cr-card mb-5 ${
        isShadow ? "shadow bg-white rounded" : null
      }`}
    >
      <Card.Body>
        <BsCircleFill className="circle-icon" />
        <div style={{ float: "right" }}>
          <Button variant="primary" className="btn-sm btn">
            Primary
          </Button>
          <Button variant="outline-danger" className="btn-sm btn">
            Danger
          </Button>{" "}
        </div>
        <Card.Text className="mt-3">
          <strong>Prodjar</strong>
          <br />
          <small> design development,seo marketing and branding kits.</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
