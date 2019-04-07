import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Row, Col } from "antd";
import { IconButton } from "@material-ui/core";

import startimesbadge from "../assets/static/image/startimesbadge.jpg";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});
function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <marquee
              behavior="alternative"
              scrollamount="5"
              vspace="20"
              direction="right"
            >
              <Row gutter={24}>
                <Col span={4}>
                  <IconButton href="#">
                    <img
                      style={{ maxWidth: "64px", maxHeight: "64px" }}
                      alt="brand"
                      src={startimesbadge}
                    />
                  </IconButton>
                </Col>
                <Col span={4}>
                  <IconButton href="#">
                    <img
                      style={{ maxWidth: "64px", maxHeight: "64px" }}
                      alt="brand"
                      src={startimesbadge}
                    />
                  </IconButton>
                </Col>
                <Col span={4}>
                  <IconButton href="#">
                    <img
                      style={{ maxWidth: "64px", maxHeight: "64px" }}
                      alt="brand"
                      src={startimesbadge}
                    />
                  </IconButton>
                </Col>

                <Col span={4}>
                  <IconButton href="#">
                    <img
                      style={{ maxWidth: "64px", maxHeight: "64px" }}
                      alt="brand"
                      src={startimesbadge}
                    />
                  </IconButton>
                </Col>
                <Col span={4}>
                  <IconButton href="#">
                    <img
                      style={{ maxWidth: "64px", maxHeight: "64px" }}
                      alt="brand"
                      src={startimesbadge}
                    />
                  </IconButton>
                </Col>

                <Col span={4}>
                  <IconButton href="#">
                    <img
                      style={{ maxWidth: "64px", maxHeight: "64px" }}
                      alt="brand"
                      src={startimesbadge}
                    />
                  </IconButton>
                </Col>
              </Row>
            </marquee>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

const PartnerList = withStyles(styles)(CenteredGrid);
export default PartnerList;
