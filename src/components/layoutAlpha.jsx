import React from "react";
import "antd/dist/antd.css";
import "./assets/css/layAlpha.css";
import { Layout, Affix, Row } from "antd";
import TabsNav from "./TabsNav";
import CompBody from "./compBody";

import brandlogo from "./assets/static/image/brandlogo.jpg";
import FooterListMenu from "./containers/footerList Menu";
import { IconButton } from "@material-ui/core";

const { Header, Content } = Layout;

class CostomLayout extends React.Component {
  state = { top: 2 };
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Layout theme="dark">
          <div className="headbig">
            <Affix offsetTop={this.state.top}>
              <Header
                className="hello"
                style={{
                  position: "static",
                  zIndex: 1,
                  width: "100%",
                  minHeight: 120,
                  marginTop: 0
                }}
              >
                <div className="logo">
                  <IconButton href="/">
                    <img
                      style={{ maxHeight: "90px", maxWidth: "250px" }}
                      alt="brand-logo"
                      src={brandlogo}
                    />
                  </IconButton>
                </div>
                <div className="head2">
                  <TabsNav />
                </div>
              </Header>
            </Affix>
          </div>
          <Content style={{ padding: "0 50px", marginTop: 20 }}>
            <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
              <CompBody />
            </div>
          </Content>
        </Layout>
        <footer
          style={{ textAlign: "center", margin: "0px 0px", width: "100%" }}
        >
          <div className="footer-div">
            <FooterListMenu />
            <Row>
              Kaxiuz Design ©2019 Created by Kazibwe Julius Junior ||
              +256779571619 <br />
              kazibwejuliusjunior@gmail.com
            </Row>
          </div>
        </footer>
      </div>
    );
  }
}

export default CostomLayout;
