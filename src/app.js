import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { clickAction } from './action';
import ChartPage from './components';

const App = props =>
  <div>
    <Button color="success" onClick={props.clickAction}>
      Click me
    </Button>
    <ChartPage />
  </div>;

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps, { clickAction })(App);
