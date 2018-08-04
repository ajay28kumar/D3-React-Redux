import React from 'react';
import { findDOMNode } from 'react-dom';
import ChartCreator from '../D3JS';

class ChartArea extends React.PureComponent {
  componentDidMount() {
    this.el = findDOMNode(this);
    this.chartClass = new ChartCreator();
    this.chartClass.create(this.el);
  }

  render() {
    return <div className="chart-area" />;
  }
}

export default ChartArea;
