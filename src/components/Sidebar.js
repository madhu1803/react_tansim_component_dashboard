import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SideList from "./SideList";
export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <ListGroup className="mt-5">
          <SideList
            title="TANSIM Guidelines And Benefits Of Organisation"
            isBtn={true}
          />
        </ListGroup>
        <p className="mt-5">
          <strong>Quick Actions</strong>
        </p>
        <ListGroup>
          <SideList
            title="Incubator Linked with startups"
            isUnderlined={true}
          />
          <SideList title="Ecosystem" isUnderlined={true} />
          <SideList title="Resource" isUnderlined={true} />
          <SideList title="Blog/News" isUnderlined={true} />
          <SideList title="Applied Events" isUnderlined={true} />
          <SideList title="Applied Deals" isUnderlined={true} />
          <SideList
            title="Incubator Linked with startups"
            isUnderlined={true}
          />
          <SideList title="Applied Schemes" isUnderlined={true} />
          <SideList title="FAQ'S" isUnderlined={true} />
        </ListGroup>
      </div>
    );
  }
}
