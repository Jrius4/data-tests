import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TabsNav from "./TabsNav";

const NavBar = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <TabsNav />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
