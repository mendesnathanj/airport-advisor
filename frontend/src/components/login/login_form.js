import React from 'react';
import { withRouter } from 'react-router-dom';
import './login_form.scss';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    //may have to change depending on column names
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
        username: this.state.username,
        password: this.state.password
    }
    let props = this.props;
    this.props.login(user).then( () => {
      console.log('login tamadir', props.errors)
      if(props.errors.length === 0)  {props.closeModal()};
    });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
    }

    renderErrors() {
      console.log('errors should be in login form renderErrors', this.props.errors);
      console.log('props.error', this.props.errors)
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
            <header className="header">Login</header>
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
