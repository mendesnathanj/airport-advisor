import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewForm from './review_form';

const airport = {
  _id: "5e7300fe50955a1a2146f38c",
  name: "Port Moresby Jacksons International Airport",
  code: "POM",
  city: "Port Moresby",
  country: "OC",
  lat: { $numberDouble: "-9.443380355834961" },
  long: { $numberDouble: "147.22000122070312" },
  __v: { $numberInt: "0" }
};

// TODO:
// write logic to find airport by _id once it is in state
const mapStateToProps = state => ({
  airport
});

const mapDispatchToProps = dispatch => ({

});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
