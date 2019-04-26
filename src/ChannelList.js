import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import ChannelCard from './ChannelCard';
import Grid from '@material-ui/core/Grid';

// import classes from '*.module.css';

const styles = theme => ({
  cardList: {
    display: 'flex'
  }
});
export class ChannelList extends Component {
  constructor(props) {
    super(props);
    this.state = { liveStreams: [] };
  }
  componentDidMount() {
    this.fetchLiveStreams();
  }

  fetchLiveStreams() {
    axios.get(`/api/live-streams`).then(({ data }) => {
      const liveStreams = data;
      this.setState({ liveStreams: liveStreams });
    });
  }

  render() {
    const { liveStreams } = this.state;
    const { classes } = this.props;
    console.log(this.state);
    return (
      <div>
        <Grid container spacing={40}>
          {liveStreams &&
            liveStreams.map(stream => {
              return (
                <Grid item key={stream.id} xs={12} sm={6} md={4} lg={3}>
                  <ChannelCard data={stream} />
                </Grid>
              );
            })}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ChannelList);
