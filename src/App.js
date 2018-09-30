import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2';
import _ from 'lodash';

import './App.css';
import 'fixed-data-table-2/dist/fixed-data-table.css';

import {ads, ad_metrics} from './mock_data';

let remoteIdLocations = {};

const FixedCell = props => {
  const {rowIndex, field} = props;
  const value = props.data.ads.ads[rowIndex][field];

  remoteIdLocations[rowIndex] = props.data.ads.ads[rowIndex]['remote_id'];

  return (
    <Cell>
      {value}
    </Cell>
  );
}

const FixedTable = props => {
  const {ads} = props;
  const adSize = _.size(ads.ads);

  return (
    <div style={{padding: '20px', margin: '0 20%'}}>
      <Table
        rowHeight={100}
        rowsCount={adSize}
        width={500}
        height={500}
        headerHeight={70}
        marginTop={20}
      >
        <Column
          header={<Cell>Ads Name</Cell>}
          cell={<FixedCell data={props} field="name" />}
          width={100}
          fixed={true}
        />
        <Column
          header={<Cell>Impressions</Cell>}
          cell="Impressions"
          width={150}
        />
        <Column
          header={<Cell>Reach</Cell>}
          cell="Reach"
          width={150}
        />
        <Column
          header={<Cell>Frequency</Cell>}
          cell="Frequency"
          width={150}
        />
        <Column
          header={<Cell>CPM</Cell>}
          cell="CPM"
          width={150}
        />
        <Column
          header={<Cell>Spend</Cell>}
          cell="Spend"
          width={150}
        />
        <Column
          header={<Cell>CTR</Cell>}
          cell="CTR"
          width={150}
        />
        <Column
          header={<Cell>Cost Per Inline Link Click</Cell>}
          cell="Click"
          width={150}
        />
        <Column
          header={<Cell>Actions: Goal</Cell>}
          cell="Goal"
          width={150}
        />
        <Column
          header={<Cell>Actions: Link Click</Cell>}
          cell="Click"
          width={150}
        />
        <Column
          header={<Cell>Cost Per Action Type: Cost Per Goal</Cell>}
          cell="Goal"
          width={150}
        />
        <Column
          header={<Cell>Actions: Offsite Conversion</Cell>}
          cell="Conversion"
          width={150}
        />
      </Table>
    </div>
  );
};

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
        <FixedTable ads={this.state.ads} adMetrics={this.state.adMetrics} />
      </div>
    );
  }
}

export default App;
