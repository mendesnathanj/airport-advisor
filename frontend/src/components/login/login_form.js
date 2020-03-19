import React from 'react';
import { withRouter } from 'react-router-dom';
import './login_form.scss';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    //may have to change depending on column names
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
        username: this.state.username,
        password: this.state.password
    }
    this.props.closeModal();
    this.props.login(user);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }
//   renderErrors() {
//     return(
//       <ul>
//         {Object.keys(this.state.errors).map((error, i) => (
//           <li key={`error-${i}`}>
//             {this.state.errors[error]}
//           </li>
//         ))}
//       </ul>
//     );
//     }
    render() {
        return (
          <div className="login">
            <header className="header">Sign Up</header>
            <form onSubmit={this.handleSubmit} className="login-form">
              <input
                className="login-input"
                type="text"
                value={this.state.email}
                onChange={this.update("username")}
                placeholder="username"
              />
              <br />
              <input
                className="login-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="password"
              />
              <br />
              <input className="submit-login" type="submit" value="Login" />
              {/* {this.renderErrors()} */}
            </form>
            {/* <button>Create a button to open the sign up modal</button> */}
          </div>
        );
    }

}

export default withRouter(LoginForm)
