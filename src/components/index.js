import React from 'react';
import ChartArea from './ChartArea';
import ChartMakerTool from './ChartMakerTool';
import { initialState } from './initialState';
import ChartCreator from '../D3JS';
import { storeData } from '../listener/store';

class ChartPage extends React.PureComponent {
  state = {
    ...initialState.state,
  };

  componentDidMount = () => {
    storeData.addChangeListener(this._onChange);
  };

  componentWillUnmount = () => {
    storeData.removeChangeListener(this._onChange);
  };

  _onChange = () => {
    console.log('data : ', storeData.getEventData());
  };

  changeColor = ({ hex }) => {
    if (this.state.backgroundColor !== 'hex') {
      this.setState(
        {
          backgroundColor: hex,
        },
        () => this.eventsName('backgroundColorChange'),
      );
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    initialState.state = {
      ...initialState.state,
      ...this.state,
    };
  };
  chartClass = new ChartCreator();
  eventsName = eventName => {
    this.chartClass.update(eventName);
  };

  render() {
    return (
      <div>
        <ChartMakerTool color={this.state.backgroundColor} onColorChange={this.changeColor} />
        <ChartArea />
      </div>
    );
  }
}

export default ChartPage;
