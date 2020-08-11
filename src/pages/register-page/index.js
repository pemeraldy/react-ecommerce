import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Form from '../../components/form/index';
import FormInput from '../../components/formInput/index';
import Button from '../../components/button';
//import { auth } from '../Firebase/utils';

class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    handleSubmit = async (event) => {
        event.preventDefault();

    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { firstName, lastName, email, password, confirmPassword } = this.state;
        return (
            <div className="Register">
                <div className="Register-image-prop Register-image">
                    <div className="Register-image-overlay">
                        <p>
                            <em>"Life's too short to say no to cake" - Anon</em>
                        </p>
                    </div>
                </div>
                <div className="Register-form-lyt">
                    <div className="Register-form">
                        <h3 className="Register-heading">Create an account with us</h3>
                        <h5 className="Register-subtext">
                            Already registered?{' '}
                            <span>
                                <Link to="/signin"> Sign in!</Link>
                            </span>
                        </h5>

                        <Form onSubmit={this.handleSubmit}>
                            <FormInput
                                type="text"
                                placeholder="First Name"
                                label="First Name"
                                name="firstName"
                                value={firstName}
                                onChange={this.handleChange}
                            />
                            <FormInput
                                type="text"
                                placeholder="Last Name"
                                label="Last Name"
                                value={lastName}
                                onChange={this.handleChange}
                                name="lastName"
                            />
                            <FormInput type="email"
                                placeholder="Email"
                                label="Email"
                                name="email"
                                value={email}
                                onChange={this.handleChange} />
                            <FormInput
                                type="password"
                                placeholder="Password"
                                label="Password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                            />
                            <FormInput
                                type="password"
                                placeholder="Confirm Password"
                                label="Confirm Password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={this.handleChange}

                            />
                            <Button type="submit" placeholder="Sign Up" />
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;