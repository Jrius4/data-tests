import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import { Icon } from "antd";

const styles = theme => ({
  badge: {
    top: 1,
    right: -15,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  }
});

function CustomizedBadge(props) {
  const { classes } = props;

  return (
    <IconButton aria-label="Cart">
      <Badge
        badgeContent={4}
        color="primary"
        classes={{ badge: classes.badge }}
      >
        <Icon type="shopping-cart" />
      </Badge>
    </IconButton>
  );
}

CustomizedBadge.propTypes = {
  classes: PropTypes.object.isRequired
};
const BadgeShow1 = withStyles(styles)(CustomizedBadge);

export default BadgeShow1;
