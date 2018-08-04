import React from 'react';
import { Button } from 'reactstrap';
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
    console.log('this.props.color: ', this.props.color);
    const { isOpen } = this.state;
    return (
      <div className={styles.selectedColor}>
        <div className={styles.colorPickerWrapper}>
          <Button
            onClick={this.toggleColorPicker}
            className={styles.selectedColorPreview}
            style={{ backgroundColor: this.props.color, color: getCorrectTextColor(this.props.color) }}
          >
            Change color from here
          </Button>
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

const getCorrectTextColor = hex => {
  /*
  From this W3C document: http://www.webmasterworld.com/r.cgi?f=88&d=9769&url=http://www.w3.org/TR/AERT#color-contrast
  
  Color brightness is determined by the following formula:
  ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
  
  I know this could be more compact, but I think this is easier to read/explain.
  
  */

  const threshold = 130;
  /* about half of 256. Lower threshold equals more dark text on dark background  */
  const hexToR = h => parseInt(cutHex(h).substring(0, 2), 16);
  const hexToG = h => parseInt(cutHex(h).substring(2, 4), 16);
  const hexToB = h => parseInt(cutHex(h).substring(4, 6), 16);
  const cutHex = h => (h.charAt(0) === '#' ? h.substring(1, 7) : h);
  const hRed = hexToR(hex);
  const hGreen = hexToG(hex);
  const hBlue = hexToB(hex);

  const cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
  if (cBrightness > threshold) {
    return '#000000';
  }
  return '#ffffff';
};

export default ChartMakerTool;
