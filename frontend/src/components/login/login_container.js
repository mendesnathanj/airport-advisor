import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
    console.log('state.errors.session', state)
      return {
        formType: "login",
        errors: state.errors.session,
    }
};

const mapDispatchToProps = (dispatch) => ({
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
