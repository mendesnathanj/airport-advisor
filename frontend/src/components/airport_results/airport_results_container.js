import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AirportResults from './airport_results';

const mapStateToProps = (_, ownProps) => ({
    query: ownProps.location.query
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AirportResults));
