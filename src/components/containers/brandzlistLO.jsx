import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Row, Col, Divider } from "antd";
import { Typography, IconButton } from "@material-ui/core";
import NewCard from "../presentional/cool";
import GalleryList from "./Gallery";

import FeauturePlayer from "./FeauturePlayers";
import FeaturedPlayersPicz from "./2featuredPlayerx";
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
        <Row href="#News" gutter={16}>
          <Divider orientation="left">
            <Typography title>
              <h3>Latest News</h3>
            </Typography>
          </Divider>

          <Col span={8}>
            <NewCard />
          </Col>
          <Col span={8}>
            <NewCard />
          </Col>
          <Col span={8}>
            <NewCard />
          </Col>
          <Col span={8}>
            <NewCard />
          </Col>
          <Col span={8}>
            <NewCard />
          </Col>
          <Col span={8}>
            <NewCard />
          </Col>
        </Row>
        <Row>
          <GalleryList />
        </Row>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Featured Clubs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Featured Managers</Paper>
        </Grid>
        <Divider orientation="left">
          <Typography>
            <h2>Club News</h2>
          </Typography>
        </Divider>

        <Grid item sm={4}>
          <NewCard />
        </Grid>
        <Grid item sm={4}>
          <NewCard />
        </Grid>
        <Grid item sm={4}>
          <NewCard />
        </Grid>
      </Grid>

      <Row>
        <Divider orientation="left">More Updates</Divider>
      </Row>
      <Paper className={classes.paper}>
        <Row href="Players" gutter={8}>
          <Divider orientation="left">Feautured Players</Divider>
          <Col span={8}>
            <FeauturePlayer />
          </Col>
          <Col span={16}>
            {" "}
            <FeaturedPlayersPicz />
          </Col>
        </Row>
      </Paper>
     
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

const Brandzlist = withStyles(styles)(CenteredGrid);
export default Brandzlist;
