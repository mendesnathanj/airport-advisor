import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { fetchAirports } from '../../actions/airport_actions';
import SearchBar from './search_bar';


const mapStateToProps = state => ({
  airports: Object.values(state.airports)
});

const mapDispatchToProps = dispatch => ({
  fetchAirports: () => dispatch(fetchAirports())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
