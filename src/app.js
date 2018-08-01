import React from "react";
import {connect} from 'react-redux';
import {clickAction} from './action';

const App = ({clickAction}) => {
  return <div>
    <button onClick={clickAction}>Hello world</button>
  </div>;
};

const mapStateToProps = state => ({state})

export default connect(mapStateToProps, {clickAction})(App);
