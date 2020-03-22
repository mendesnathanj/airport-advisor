import { connect } from 'react-redux';
import { fetchAirport } from '../../actions/airport_actions';
import ShowForm from './show_form';
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    return {
        // reviews: Object.values(state.airport_id.reviews),
        airport: state.airports[ownProps.match.params.airportId]
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchAirport: (airport_id) => dispatch(fetchAirport(airport_id))
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ShowForm));