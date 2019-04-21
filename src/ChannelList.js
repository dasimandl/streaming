import React, { Component } from 'react';
import axios from 'axios';
const apiBaseUrl = process.env.REACT_APP_DEV_API_BASE_URL;

console.log(apiBaseUrl);

export default class ChannelList extends Component {
  constructor(props) {
    super(props);
    this.state = { liveStreams: [] };
  }
  componentDidMount() {
    axios.get(`/api/live-streams`).then(({ data }) => {
      const liveStreams = data.live_streams;
      this.setState({ liveStreams: liveStreams });
      console.log(this.state, 'STATES');
    });
  }

  render() {
    const { liveStreams } = this.state;
    console.log(this.state);
    return (
      <div>
        <ul>{liveStreams && liveStreams.map(stream => <div>{stream.name}</div>)}</ul>
      </div>
    );
  }
}
