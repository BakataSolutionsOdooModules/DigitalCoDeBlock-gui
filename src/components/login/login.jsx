
import React from 'react';
import PropTypes from 'prop-types';

//import Box from '../box/box.jsx';


const LoginComponent = props => {
    const {
        username,
        email,
        password,
        confirmPassword,

        handleSubmit,
        handleChange,
    } = props;

    return (
        <div
            /*componentRef={containerRef} */
        >
            <div className="bgImg"></div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Choose a username"
                                value={username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="field">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="fluid ui button blue">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


LoginComponent.propTypes = {
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPassword : PropTypes.string,

    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
}

LoginComponent.defaultProps = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
};

export default LoginComponent;
