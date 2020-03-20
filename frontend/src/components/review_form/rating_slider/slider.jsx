import React from 'react';
import Circle from './circle';

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      finalValue: 0,
      valueSelected: false
    };

    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleHover(i) {
    this.setState({ value: i });
  }

  handleClick(i) {
    this.setState({ finalValue: i, valueSelected: true });
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
