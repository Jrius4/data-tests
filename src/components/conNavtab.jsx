import React from "react";
import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class ConNavtab extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        theme="light"
      >
        <Menu.Item key="mail">Home</Menu.Item>
        <Menu.Item key="app">
          <a href="#fixtures">Fixture</a>
        </Menu.Item>
        <Menu.Item key="pg3">
          <a href="#Results">Results</a>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="dingding" />
              Tables
            </span>
          }
        >
          <MenuItemGroup title="Seniors">
            <Menu.Item href="#seniors" key="setting:1">
              Seniors
            </Menu.Item>
            <Menu.Item key="setting:2">Features News</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Juniors">
            <Menu.Item key="setting:3">Juniors</Menu.Item>
            <Menu.Item key="setting:4">Feature News</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="Clubs">
          <a href="#Clubs">Clubs</a>
        </Menu.Item>
        <Menu.Item key="players">
          <a href="#Players">Players</a>
        </Menu.Item>
        <Menu.Item key="Managers">
          <a href="#Managers">Managers</a>
        </Menu.Item>
        <Menu.Item key="News">
          <a href="#News">News</a>
        </Menu.Item>
        <Menu.Item key="Juniors">
          <a href="#Juniors">Juniors</a>
        </Menu.Item>
        <Menu.Item key="Referees">
          <a href="#Referees">Referees</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default ConNavtab;
