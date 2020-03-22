import { connect } from 'react-redux';
import { fetchAirport } from '../../actions/airport_actions';
import ShowForm from './show_form';
import { withRouter } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        // reviews: Object.values(state.reviews),
        airport: state.airports[ownProps.match.params.airportId],
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchAirport: airport_id => dispatch(fetchAirport(airport_id)),
      openModal: modal => dispatch(openModal(modal)),
      closeModal: () => dispatch(closeModal())
    };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ShowForm));