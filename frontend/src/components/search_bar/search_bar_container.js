import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { fetchAirports, searchAirports } from '../../actions/airport_actions';
import SearchBar from './search_bar';


const mapStateToProps = state => ({
  airports: state.search
});

const mapDispatchToProps = dispatch => ({
  fetchAirports: () => dispatch(fetchAirports()),
  search: query => dispatch(searchAirports(query))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
