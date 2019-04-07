import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Icon } from "antd";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#0b085e",
    color: "#f5f5f5"
  }
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav" style={{ color: "#f5f5f5" }}>
        <ListItem button>
          <ListItemIcon>
            <Icon type="facebook" />
          </ListItemIcon>
          <ListItemText style={{ color: "#f5f5f5" }} primary="facebook" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon type="twitter" />
          </ListItemIcon>
          <ListItemText style={{ color: "#f5f5f5" }} primary="twitter" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" style={{ color: "#f5f5f5" }}>
        <ListItem button>
          <ListItemText style={{ color: "#f5f5f5" }} primary="League 1" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText style={{ color: "#f5f5f5" }} primary="League 2" />
        </ListItemLink>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};
const SimpleFooterList = withStyles(styles)(SimpleList);

export default SimpleFooterList;
