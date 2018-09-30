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

const ScrolledCell = props => {
  const {rowIndex, field} = props;

  let value = '';

  if (props.data.adMetrics.rows !== undefined && props.data.adMetrics.rows.length > 0) {
    const foundObj = _.find(props.data.adMetrics.rows, o => {
      return o.remote_id === remoteIdLocations[rowIndex]
    });
    
    value = foundObj[field];
  }
  
  return (
    <Cell>
      {value}
    </Cell>
  );
}

function createScrollableColumns(props) {
  let adMetricsArray = [];
  let adMetricsColumns = [];
  
  if (props.adMetrics.column_names !== undefined && props.adMetrics.column_names.length > 0) {
    adMetricsArray = props.adMetrics.column_names;
  }

  adMetricsArray.forEach(column => {
    const headerName = ucText(column.replace(/:|_/g, ' '));
    adMetricsColumns.push(
      <Column
        header={<Cell>{headerName}</Cell>}
        cell={<ScrolledCell data={props} field={column} />}
        width={150}
        key={column}
      />
    );
  });

  return adMetricsColumns;
}

const ucText = text => text.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');

const FixedTable = props => {
  const {ads} = props;
  const adSize = _.size(ads.ads);

  return (
    <div className="fixed-table">
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
        {createScrollableColumns(props)}
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
