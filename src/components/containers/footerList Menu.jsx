import React from "react";
import { Divider, Row, Col } from "antd";
import "../assets/css/style.css";

const FooterListMenu = () => {
  return (
    <div className="footer-list">
      <Row gutter={16}>
        <Col span={6}>
          <Divider style={{ color: "#f8f4f4" }}>Updates</Divider>
          <ul>
            <li>
              <a href="#">Players</a>
            </li>
            <li>
              <a href="#">Players</a>
            </li>
            <li>
              <a href="#">Players</a>
            </li>
            <li>
              <a href="#">Players</a>
            </li>
            <li>
              <a href="#">Players</a>
            </li>
          </ul>
        </Col>
        <Col span={6}>
          <Divider style={{ color: "#f8f4f4" }}>Teams</Divider>
          <ul>
            <li>
              <a href="#">Players</a>
            </li>
            <li>
              <a href="#">Players</a>
            </li>
            <li>
              <a href="#">Players</a>
            </li>
            <li>
              <a href="#">Players</a>
            </li>
            <li>
              <a href="#">Players</a>
            </li>
          </ul>
        </Col>
        <Col span={6}>
          <Divider style={{ color: "#f8f4f4" }}>Teams</Divider>
          <ul>
            <li>
              <a href="#">Players</a>
            </li>
            <li>
              <a href="#">Players</a>
            </li>
            <li>
              <a href="#">Players</a>
            </li>
            <li>
              <a href="#">Players</a>
            </li>
            <li>
              <a href="#">Players</a>
            </li>
          </ul>
        </Col>
        <Col span={6}>
          <Divider style={{ color: "#f8f4f4" }}>Teams</Divider>
          <ul>
            <li>
              <a href="#">Players</a>
            </li>
            <li>
              <a href="#">Players</a>
            </li>
            <li>
              <a href="#">Players</a>
            </li>
            <li>
              <a href="#">Players</a>
            </li>
            <li>
              <a href="#">Players</a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};
export default FooterListMenu;
