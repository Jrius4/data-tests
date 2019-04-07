import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import NoSsr from "@material-ui/core/NoSsr";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

function LinkTab(props) {
  return (
    <Tab component="a" onClick={event => event.preventDefault()} {...props} />
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  root2: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class NavTabs extends React.Component {
  state = {
    value: 0,
    value2: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChange2 = (event, value2) => {
    this.setState({ value2 });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const { value2 } = this.state;

    return (
      <div className={classes.root2}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <NoSsr>
              <div className={classes.root} style={{ marginTop: "0px" }}>
                <AppBar position="static">
                  <Tabs
                    variant="fullWidth"
                    value={value2}
                    onChange={this.handleChange2}
                  >
                    <LinkTab label="Page One" href="page1" />
                    <LinkTab label="Page Two" href="page2" />
                    <LinkTab label="Page Three" href="page3" />
                  </Tabs>
                </AppBar>
                {value2 === 0 && <TabContainer>Page One</TabContainer>}
                {value2 === 1 && <TabContainer>Page Two</TabContainer>}
                {value2 === 2 && <TabContainer>Page Three</TabContainer>}
              </div>
            </NoSsr>
          </TabContainer>
        )}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

const SimpleTabs = withStyles(styles)(NavTabs);

export default SimpleTabs;
