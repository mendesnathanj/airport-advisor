import "./modal.scss";
import React from "react";
import { openModal, closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";


function ModalTest({ openModal }) {
  return (
    <div>
      <button  onClick={() => openModal("login")}>login</button>
      <button  onClick={() => openModal("signup")}>signup</button>
    </div>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(null, mapDispatchToProps)(ModalTest);
