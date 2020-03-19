import React from 'react';


class ReviewForm extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <form>
          <h1>New Review for { this.props.airport }</h1>
        </form>
      </div>
    );
  }
}


export default ReviewForm;
