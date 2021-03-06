import React from 'react';
import { connect } from 'react-redux';
import { clickAction } from './action';
import ChartPage from './components';

const { registerObserver } = require('react-perf-devtool');

registerObserver();

const App = () =>
  <div>
    <ChartPage />
  </div>;

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps, { clickAction })(App);
