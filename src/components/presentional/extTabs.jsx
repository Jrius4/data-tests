import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import ExtreTables from "./extTables";
import { Card } from "@material-ui/core";
import JuniorTableResults from "./JuniorTables";

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

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Seniors" />
            <Tab label="Juniors" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer style={{ marginLeft: "1px" }}>
            <Card style={{ padding: "2px", width: "300px" }}>
              <ExtreTables />
            </Card>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer style={{ marginLeft: "1px" }}>
            <Card style={{ padding: "2px", width: "300px" }}>
              <JuniorTableResults />
            </Card>
          </TabContainer>
        )}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};
const ExtreTabs = withStyles(styles)(SimpleTabs);
export default ExtreTabs;
