import React from 'react';
import { connect } from 'react-redux';
import { clickAction } from './action';
import ChartPage from './components';

const App = () =>
  <div>
    <ChartPage />
  </div>;

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps, { clickAction })(App);
