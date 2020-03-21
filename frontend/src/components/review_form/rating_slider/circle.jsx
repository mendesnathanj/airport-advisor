import React from 'react';
import './Circle.scss';

class Circle extends React.Component {
  constructor(props) {
    super(props);

    this.fill = this.fill.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  fill(val) {
    return () => this.props.handleHover(val);
  }

  handleClick(val) {
    return () => this.props.handleClick(val);
  }

  render() {
    let fullCircleClasses = 'circle';
    if (this.props.hoveredNum >= 1) fullCircleClasses += ' filled-circle';

    return (
      <div className="circle-container">
        <div
          onMouseOver={this.fill(this.props.index)}
          onClick={this.handleClick(this.props.index)}
          className={fullCircleClasses}
        ></div>
      </div>
    );
  }
}


export default Circle;
