import React from 'react';


class Textbox extends React.Component {
  constructor(props) {
    super(props);

    this.maxLength = 666;
    this.state = { wordsLeft: 666 - this.props.review.length };
    this.handleInput = this.handleInput.bind(this);
    this.checkCharLimit = this.checkCharLimit.bind(this);
  }

  handleInput(e) {
    this.props.handleReviewInput(e.target.value);
    this.setState({ wordsLeft: this.maxLength - e.target.value.length });
  }

  checkCharLimit(e) {
    if (this.state.wordsLeft === 0) e.preventDefault();
  }

  render() {
    return (
      <div className="rating-input-container">
        <span className="word-count">{ this.state.wordsLeft } characters left...</span>
        <textarea value={ this.props.review } onKeyPress={ e => this.checkCharLimit(e) } onChange={ e => this.handleInput(e) } className="text-area" placeholder="Any last thoughts?">
        </textarea>
      </div>
    )
  }
}


export default Textbox;
