import React from 'react';
import { withRouter } from 'react-router-dom';
import './login_form.scss';
import { RECEIVE_USER_SIGN_IN } from '../../actions/session_actions';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);

    // Close modal when user is loged in
    let modalOpen = true;
    window.store.subscribe(() => {
      if(window.store.getState().session.isAuthenticated && modalOpen) {
        modalOpen = false;
        props.closeModal();
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
        username: this.state.username,
        password: this.state.password
    }
    this.props.login(user);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
    }

    renderErrors() {
      // console.log('errors should be in login form renderErrors', this.props.errors);
      // console.log('props.error', this.props.errors)
      return(
        <ul className='errors'>
          {Object.keys(this.props.errors).map((error, i) => (
            <li key={`error-${i}`}>
              {this.props.errors[error]}
            </li>
          ))}
        </ul>
      );
    }


    render() {
      console.log('errors in render part of login form', this.state.errors)

        return (
          <div className="login">
            <h1 className="header">Login</h1>
            <form onSubmit={this.handleSubmit} className="login-form">
              <input
                className="login-input"
                type="text"
                value={this.state.email}
                onChange={this.update("username")}
                placeholder="Username"
              />
              <br />
              <input
                className="login-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <br />
              <input className="submit-login" type="submit" value="Login" />
              {this.renderErrors()}
            </form>
            {/* <button>Create a button to open the sign up modal</button> */}
          </div>
        );
    }

}

export default withRouter(LoginForm)
