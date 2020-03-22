import React from 'react';
import Circle from './circle';

class Slider extends React.Component {
  constructor(props) {
    super(props);

    let initialValue = this.props.value === null ? 0 : this.props.value;

    this.state = {
      value: initialValue,
      finalValue: initialValue,
      valueSelected: this.props.value !== null
    };

    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleHover(val) {
    this.setState({ value: val });
  }

  handleClick(val) {
    this.props.handleRatingSelection(this.props.category, val);
    this.setState({ finalValue: val, valueSelected: true });
  }

  reset() {
    if (!this.state.valueSelected)
      this.setState({ value: 0 });
    else
      this.setState({ value: this.state.finalValue });
  }

  render() {
    let circles = [];
    let value = this.state.value;

    for (let i = 0; i < 5; i++) {
      circles.push(
        <Circle
          color={value > 0}
          hoveredNum={value}
          handleHover={this.handleHover}
          handleClick={this.handleClick}
          key={i}
          index={i + 1} />
      );

      value -= 1;
    }

    return (
      <div className="circle-list-container" onMouseLeave={this.reset}>
        { circles }
      </div>
    );
  }
}


export default Slider;
