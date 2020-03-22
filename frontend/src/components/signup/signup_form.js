import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            password2:''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        }
        this.props.signup(user)
        this.props.closeModal();
    }
    // renderErrors() {
    //      return(
    //         <ul>
    //             {Object.keys(this.state.errors).map((error, i) => (
    //             <li key={`error-${i}`}>
    //                 {this.state.errors[error]}
    //             </li>
    //             ))}
    //         </ul>
    // );
    // }
    render() {
        return (
          <div className="signup">
            <header className="header">Sign Up</header>
            <form onSubmit={this.handleSubmit} className="signup-form">
              <input
                className="signup-input"
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username"
              />
              <br />
              <input
                className="signup-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <br />
              <input
                className="signup-input"
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />
              <br />
              <input className="submit-signup" type="submit" value="Sign Up" />
              {/* {this.renderErrors()} */}
            </form>
            {/* <button>Create a button to open the login modal</button> */}
          </div>
        );
    }
}

export default withRouter(SignupForm);
