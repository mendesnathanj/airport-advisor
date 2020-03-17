import React from 'react';
import { withRouter } from 'react-router-dom';
import './login_form.scss';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        //may have to change depending on column names
        this.state = {
            username:'username',
            password:'password',
            errors:'',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }
   
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    

}