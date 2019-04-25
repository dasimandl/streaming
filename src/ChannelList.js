import React, { Component } from 'react';
import axios from 'axios';

export default class ChannelList extends Component {
  constructor(props) {
    super(props);
    this.state = { liveStreams: [] };
  }
  componentDidMount() {
    axios.get(`/api/live-streams`).then(({ data }) => {
      const liveStreams = data;
      this.setState({ liveStreams: liveStreams });
    });
  }

  render() {
    const { liveStreams } = this.state;
    console.log(this.state);
    return (
      <div>
        <ul>
          {liveStreams && liveStreams.map(stream => <div key={stream.id}>{stream.name}</div>)}
        </ul>
      </div>
    );
  }
}
