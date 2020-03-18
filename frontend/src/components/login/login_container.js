import { connect } from 'react-redux';
import LoginForm from './login_form';
// import { openModal, closeModal } from '../../actions/modal_actions';
// will need to import login action when written

//may add back in later

const mapStateToProps = (state) => {
    return {
      formType: "login"
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // login: user => dispatch(login(user)),
        // closeModal: () => dispatch(closeModal()),
        // openModal: (modal) => dispatch(openModal(modal))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);