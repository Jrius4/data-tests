import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";

import award1 from "../assets/static/image/award1.jpg";

import { Icon, Divider } from "antd";

const styles = theme => ({
  card: {
    maxWidth: 400,
    marginBottom: "10px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },

  actions: {
    display: "flex"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              S
            </Avatar>
          }
          action={
            <IconButton>
              <Icon type="ellipsis" />
            </IconButton>
          }
          title="Startimes Awarding Best Clubs"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image={award1}
          title="Paella dish"
        />
        <CardContent>
          <Divider orientation="left">
            <Typography
              style={{ color: "rgba(211, 34, 122, 0.966)" }}
              variant="h6"
              component="h5"
            >
              Award Winning
            </Typography>
          </Divider>

          <Typography component="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit fugiat inventore quas natus qui voluptates. Corporis
            amet, asperiores voluptate sit tenetur itaque quod nesciunt
            similique excepturi voluptatibus? Harum, velit facilis?
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <Icon type="star" />
          </IconButton>
          <IconButton aria-label="Share">
            <Icon type="share-alt" />
          </IconButton>
          <IconButton style={{fontSize:"12px"}} size="small">
            Read more
            <Icon type="ellipsis" />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};
const NewCard = withStyles(styles)(RecipeReviewCard);

export default NewCard;
