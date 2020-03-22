import { connect } from 'react-redux';
import { fecthAirport } from '../../actions/airport_actions';
import ShowForm from './show_form';

const mapStateToProps = (state) => {
    return {
        reviews: Object.values()
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fecthAirport: (airport_id) => dispatch(fecthAirport(airport_id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowForm);