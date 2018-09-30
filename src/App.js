import React, { Component } from 'react';
import './App.css';
import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';

import {ads, ad_metrics} from './mock_data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ads: [],
      adMetrics: []
    }
  }

  componentDidMount() {
    this.getAds()
      .then(ads => {
        this.getAdMetrics()
          .then(adMetrics => {
            this.setState({ads, adMetrics});
          })
          .catch(error => {
            console.log(`getAdMetrics error: ${error}`);
          });
      })
      .catch(error => {
        console.log(`getAds error: ${error}`);
      });
  }

  // Simulate an HTTP client promise
  getAds() {
    return new Promise((resolve, reject) => {
      resolve(ads);
    });
  }

  // Simulate an HTTP client promise
  getAdMetrics() {
    return new Promise((resolve, reject) => {
      resolve(ad_metrics);
    });
  }
  
  render() {
    return (
      <div>
        <h2>Fixed Data Table App</h2>
        {JSON.stringify(this.state.ads)}
        <br />
        {JSON.stringify(this.state.adMetrics)}
      </div>
    );
  }
}

export default App;
