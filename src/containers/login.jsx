import React from 'react';
import { useState, useEffect } from "react";
//import bindAll from 'lodash.bindall';

import LoginComponent from '../components/login/login.jsx';

class Login extends React.Component {

    constructor (props) {
        super(props);
        //bindAll(this, []);
        const initialValues = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
        const [formValues, setFormValues] = useState(initialValues);
        const [formErrors, setFormErrors] = useState({});
        const [isSubmit, setIsSubmit] = useState(false);

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        //setFormValues({ ...formValues, [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Those passwords didn’t match. Try again.";
        }
        return errors;
    };

    render () {
        const {
            ...props
        } = this.props;
        return (
            <LoginComponent
                username={this.formValues.username}
                email={this.formValues.email}
                password={this.formValues.password}
                confirmPassword={this.formValues.confirmPassword}

                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}

                {...props}
            />
        );
    }
}


export default Login;