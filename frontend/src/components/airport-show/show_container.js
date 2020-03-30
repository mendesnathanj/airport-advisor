import { connect } from 'react-redux';
import { fetchAirport } from '../../actions/airport_actions';
import ShowForm from './show_form';
import { withRouter } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        reviews: Object.values(state.reviews).filter(review => review.airport === ownProps.match.params.airportId),
        airport: state.airports[ownProps.match.params.airportId],
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchAirport: airport_id => dispatch(fetchAirport(airport_id)),
      openModal: (modal, review) => dispatch(openModal(modal, review)),
      closeModal: () => dispatch(closeModal())
    };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ShowForm));
