import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Icon } from "antd";
import { ListItemAvatar } from "@material-ui/core";
import startimesbadge from "../assets/static//image/startimesbadge.jpg";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon />
          <ListItemText primary="facebook" />
          <ListItemText primary="Vs" />
          <ListItemText primary="facebook" />
          <ListItemAvatar src={startimesbadge} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon type="twitter" />
          </ListItemIcon>
          <ListItemText primary="twitter" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="League 1" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="League 2" />
        </ListItemLink>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};
const FeaturedList = withStyles(styles)(SimpleList);

export default FeaturedList;
