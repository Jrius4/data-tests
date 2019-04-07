import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import TileData from "./srcz/featureplayersdata";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "antd";
import { ButtonBase } from "@material-ui/core";

const styles = theme => ({
  root2: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  image: {
    width: "250px",
    height: "250px"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <div className={classes.root2}>
        <GridList cellHeight={200} spacing={1} className={classes.gridList}>
          {TileData.map(tile => (
            <GridListTile
              key={tile.img}
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
            >
              <ButtonBase className={classes.image}>
                <img
                  className={classes.image}
                  src={tile.img}
                  alt={tile.title}
                />
              </ButtonBase>
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionIcon={
                  <IconButton className={classes.icon}>
                    <Icon type="profile" theme="filled" />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};
const FeaturedPlayersPicz = withStyles(styles)(PaperSheet);
export default FeaturedPlayersPicz;
