import React from 'react';

import { ChromePicker } from 'react-color';
import styles from './styles.css';

class ChartMakerTool extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleColorPicker = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div className={styles.selectedColor}>
        <div className={styles.colorPickerWrapper}>
          <div onClick={this.toggleColorPicker} className={styles.selectedColorPreview} style={{ backgroundColor: this.props.color }} />
        </div>
        {isOpen
          ? <div className={styles.popover}>
              <div className={styles.cover} onClick={this.toggleColorPicker} />
              <ChromePicker color={this.props.color} onChange={this.props.onColorChange} />
            </div>
          : null}
      </div>
    );
  }
}

export default ChartMakerTool;
