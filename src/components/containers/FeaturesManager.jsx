import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import profile from "../assets/static/image/profile.jpg";
import { Icon } from "antd";
import { Button } from "@material-ui/core";
/** 
import achieve from "../assets/static/image/achieve.jpg";
import advert2 from "../assets/static/image/advert2.jpg";
*/

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 300
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={profile}
            title="Muhammed Shaban"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              Best Manager 2018
            </Typography>
            <Typography component="p" style={{ fontSize: "12px" }}>
              Kazibwe Julius Junior
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button color="primary">
            <Icon type="facebook" />
          </Button>
          <Button color="primary">
            <Icon type="twitter" />
          </Button>
          <Button color="primary">
            <Icon type="ellipsis" />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const FeauturedManager = withStyles(styles)(MediaCard);
export default FeauturedManager;
