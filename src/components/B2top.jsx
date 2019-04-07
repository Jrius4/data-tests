import React from "react";
import { BackTop, Icon } from "antd";
import "../components/assets/css/style.css";

const BacTopp = () => {
  return (
    <div>
      <BackTop>
        <div
          style={{
            height: "40px",
            width: "40px",
            lineHeight: "40px",
            borderRadius: "4px",
            backgroundColor: "#1088e9",
            color: "#fff",
            textAlign: "center",
            fontSize: "20px"
          }}
          className="ant-back-top-inner"
        >
          <Icon type="up" style={{ fontSize: "16px", color: "#e8edf0" }} />
        </div>
      </BackTop>
    </div>
  );
};
export default BacTopp;
