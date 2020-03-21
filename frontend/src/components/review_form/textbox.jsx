import React from 'react';


class Textbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="rating-input-container">
        {/* <h1 className="textarea-title">Your final thoughts?</h1> */}
        <textarea className="text-area" placeholder="Any last thoughts?">

        </textarea>
      </div>
    )
  }
}


export default Textbox;
