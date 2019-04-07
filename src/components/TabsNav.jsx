import React from "react";
import { Tabs, Button } from "antd";
import "../../node_modules/antd/dist/antd.css";
import ConNavtab from "./conNavtab";

const TabPane = Tabs.TabPane;

class TabsNav extends React.Component {
  render() {
    return (
      <div>
        <Button.Group style={{ margin: 8, float: "right" }}>
          <Button type="primary" href="/">
            Log in
          </Button>
          <Button type="danger" href="/">
            Signup
          </Button>
        </Button.Group>
        <Tabs
          className="tub"
          defaultActiveKey="1"
          tabPosition="top"
          type="line"
        >
          <TabPane tab="Uganda Premier League" key="1" className="tabxt">
            <ConNavtab />
          </TabPane>
          <TabPane tab="History" key="2" href="#page1" className="tabxt">
            <ConNavtab />
          </TabPane>
          <TabPane tab="Statistics" key="3" href="#page2" className="tabxt">
            <ConNavtab />
          </TabPane>
          <TabPane
            tab="Videos & Photos"
            key="4"
            href="#page3"
            className="tabxt"
          >
            <ConNavtab />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default TabsNav;
