import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: 'red'
  }
});
const ChannelCard = props => {
  const { name, id, player_video_poster_image_url: image } = props.data;
  const { classes } = props;
  console.log(props);
  console.log(name, id, image);
  return (
    <Card className={classes.card}>
      <CardHeader title={name} />
      <CardMedia className={classes.media} image={image} title={name} />
    </Card>
  );
};

export default withStyles(styles)(ChannelCard);
