import React, { Component } from 'react';
import axios from 'axios';

export default class ChannelList extends Component {
  componentDidMount() {
    axios.get('https://api.cloud.wowza.com/api/v1.3/live_streams')
      .then(data => {
        this.data = data;
      })
  }
  
  render() {
    console.log(this.data);
    return <div />;
  }
}
