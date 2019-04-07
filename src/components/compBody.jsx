import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Divider } from "antd";
import HighLayout from "./containers/highLight";
import ExtreTabs from "./presentional/extTabs";
import FixtureList1 from "./containers/FixtureList";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import FeauturePlayer from "./containers/FeauturePlayers";
import FeauturedManager from "./containers/FeaturesManager";
import SocialMediaFeds from "./containers/SocialMedieFeeds";
import PartnerList from "./containers/PartnersList";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 1,

    color: theme.palette.text.secondary
  }
});

function CompBodyFun(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.root}>
        <Row gutter={10}>
          <Col
            xs={{ span: 28 }}
            lg={{ span: 16 }}
            sm={{ span: 20 }}
            md={{ span: 8 }}
            xl={{ span: 6 }}
          >
            <Paper className={classes.paper}>
              <Row id="fixtures">
                <FixtureList1 />
              </Row>
            </Paper>
            <Row id="Results" style={{ width: "100%" }}>
              <Divider orientation="left">Tables</Divider>

              <ExtreTabs />
            </Row>
            <Row>
              <Divider>Featured Player</Divider>
              <FeauturePlayer />
            </Row>
            <Row href="Managers">
              <Divider>Featured Manager</Divider>
              <FeauturedManager />
            </Row>
            <Row>
              <Divider>Social Media Feeds</Divider>
              <SocialMediaFeds />
            </Row>
          </Col>
          <Col
            xs={{ span: 28, offset: 1 }}
            lg={{ span: 16 }}
            sm={{ span: 28, offset: 1 }}
            md={{ span: 12, offset: 1 }}
            xl={{ span: 28, offset: 1 }}
          >
            <HighLayout />
          </Col>
        </Row>
      </div>
      <PartnerList />
    </div>
  );
}
CompBodyFun.propTypes = {
  classes: PropTypes.object.isRequired
};

const CompBody = withStyles(styles)(CompBodyFun);

export default CompBody;
