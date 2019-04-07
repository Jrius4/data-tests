import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Avatar, Divider, Icon } from "antd";
import "../assets/css/style.css";

import startimesbadge from "../assets/static/image/startimesbadge.jpg";
import logo from "../assets/static/image/logo.jpg";
import { Button } from "@material-ui/core";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

function FXlist(props){
  const { classes } = props;
  return (
    <div className="fixture-list">
      <h4>Match Day fixtures</h4>
      <Divider>
        <h6>Sunday 2, December 2018</h6>
      </Divider>
      <ul>
        <li>
          <a href="#">
            {" "}
            <div>
              Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
              Buddu United
            </div>
            <small style={{ fontSize: "8px" }}>Startimes Staduim</small>
            <small style={{ fontSize: "8px", float: "right" }}>
              4pm, 1-12-218
            </small>{" "}
          </a>
        </li>

        <li>
          <a href="#">
            {" "}
            <div>
              Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
              Buddu United
            </div>
            <small style={{ fontSize: "8px" }}>Startimes Staduim</small>
            <small style={{ fontSize: "8px", float: "right" }}>
              4pm, 1-12-218
            </small>{" "}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
            Buddu United{" "}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <div>
              Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
              Buddu United
            </div>
            <small style={{ fontSize: "8px" }}>Startimes Staduim</small>
            <small style={{ fontSize: "8px", float: "right" }}>
              4pm, 1-12-218
            </small>{" "}
          </a>{" "}
        </li>
        <li>
          <a href="#">
            {" "}
            Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
            Buddu United{" "}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <div>
              Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
              Buddu United
            </div>
            <small style={{ fontSize: "8px" }}>Startimes Staduim</small>
            <small style={{ fontSize: "8px", float: "right" }}>
              4pm, 1-12-218
            </small>{" "}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
            Buddu United{" "}
          </a>{" "}
        </li>
        <li>
          <a href="#">
            {" "}
            <div>
              Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
              Buddu United
            </div>
            <small style={{ fontSize: "8px" }}>Startimes Staduim</small>
            <small style={{ fontSize: "8px", float: "right" }}>
              4pm, 1-12-218
            </small>{" "}
          </a>
        </li>
      </ul>

      <Divider>
        <h6>Sunday 2, December 2018</h6>
      </Divider>
      <ul>
        <li>
          <a href="#">
            {" "}
            <div>
              Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
              Buddu United
            </div>
            <small style={{ fontSize: "8px" }}>Startimes Staduim</small>
            <small style={{ fontSize: "8px", float: "right" }}>
              4pm, 1-12-218
            </small>{" "}
          </a>
        </li>

        <li>
          <a href="#">
            {" "}
            <div>
              Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
              Buddu United
            </div>
            <small style={{ fontSize: "8px" }}>Startimes Staduim</small>
            <small style={{ fontSize: "8px", float: "right" }}>
              4pm, 1-12-218
            </small>{" "}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
            Buddu United{" "}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <div>
              Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
              Buddu United
            </div>
            <small style={{ fontSize: "8px" }}>Startimes Staduim</small>
            <small style={{ fontSize: "8px", float: "right" }}>
              4pm, 1-12-218
            </small>{" "}
          </a>{" "}
        </li>
        <li>
          <a href="#">
            {" "}
            Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
            Buddu United{" "}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            <div>
              Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
              Buddu United
            </div>
            <small style={{ fontSize: "8px" }}>Startimes Staduim</small>
            <small style={{ fontSize: "8px", float: "right" }}>
              4pm, 1-12-218
            </small>{" "}
          </a>
        </li>
        <li>
          <a href="#">
            {" "}
            Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
            Buddu United{" "}
          </a>{" "}
        </li>
        <li>
          <a href="#">
            {" "}
            <div>
              Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
              Buddu United
            </div>
            <small style={{ fontSize: "8px" }}>Startimes Staduim</small>
            <small style={{ fontSize: "8px", float: "right" }}>
              4pm, 1-12-218
            </small>{" "}
          </a>
        </li>
      </ul>
      <Divider orientation="right"><Button variant="outlined" color="primary" className={classes.button}>Show More <Icon type="double-right" /></Button></Divider>
    </div>
  );
};
FXlist.propTypes = {
  classes: PropTypes.object.isRequired
};

const FixtureList1 = withStyles(styles)(FXlist);
export default FixtureList1;
