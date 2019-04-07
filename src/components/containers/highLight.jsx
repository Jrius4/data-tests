import React from "react";
import { Row, Col } from "antd";
import Brandzlist from "./brandzlistLO";
import AdvanGrid from "../presentional/demos/AdvanGrid";

const HighLayout = () => {
  return (
    <div>
      <div>
        <Row gutter={16}>
          <Col span={12}>
            <AdvanGrid />
          </Col>
          <Col span={12}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              nesciunt quia, est nam odio quibusdam error quasi minima mollitia
              at aut fugiat deserunt doloribus accusantium, molestiae assumenda,
              soluta iure porro.
            </p>
          </Col>
        </Row>
      </div>
      <div>
        <Brandzlist />
      </div>
    </div>
  );
};

export default HighLayout;
