import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAirports } from '../../actions/airport_actions';
import AirportResults from './airport_results';

const mapStateToProps = (state, ownProps) => {
    let search = ownProps.location.search;
    search = search.split('=');

    let searchTerm = search[1].split('&query')[0];
    let airports = search[search.length - 1].split(",");
    airports = airports.map(id => state.airports[id]);

    return {
        airports,
        searchTerm
    }
};

const mapDispatchToProps = dispatch => ({
    fetchAirports: () => dispatch(fetchAirports())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AirportResults));
