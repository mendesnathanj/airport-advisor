import './modal.scss';
import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../login/login_container";
import SignupFormContainer from "../signup/signup_container";
import NewReviewFormContainer from '../review_form/new_review_form_container';
import EditReviewFormContainer from '../review_form/edit_review_form_container';

function Modal(props) {
  if (!props.modal) {
    return null;
  }
  let component;
  switch (props.modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    case 'new-review':
      component = <NewReviewFormContainer />;
      break;
    case 'edit-review':
      component = <EditReviewFormContainer review={props.review} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={props.closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
    review: state.ui.review
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
