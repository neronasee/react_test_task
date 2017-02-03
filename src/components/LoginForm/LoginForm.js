import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header.js';
import Input from './Input.js';
import SubmitButton from './SubmitButton.js';
import Success from './Success.js';

import * as actions from '../../actions/loginFormActions.js';

class LoginForm extends Component {
	state = {
		inputVals: {
			login: '',
			pass: ''
		}
	}

	handleInputChange = (propName, e) => {
		const inputVals = this.state.inputVals;
		inputVals[propName] = e.target.value;
		this.setState({inputVals: inputVals});
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const {login, pass} = this.state.inputVals;

		const cb = () => {
			this.setState({inputVals:{login:'', pass:''}});
		}

		this.props.submitLogin(login, pass, cb);
	}

	render = () => {
		const {processing, error, success} = this.props;
		if(success){
			return <Success />
		} else {
			return (

				<form className="login-form" onSubmit={this.handleSubmit}>
					<Header />

					<Input
						error={error}
						type="text"
						value={this.state.inputVals.login}
						placeholder="Login"
						changeHandler={this.handleInputChange.bind(this, 'login')}/>

					<Input
						type="password"
						value={this.state.inputVals.pass}
						placeholder="Password"
						changeHandler={this.handleInputChange.bind(this, 'pass')}/>


					<SubmitButton
						text="Login &#8594;"
						processing={processing}/>
				</form>
			);
		}

	}
}

const mapStateToProps = state => {
	const {processing, error, success, language} = state.login;

	return {
		processing,
		error,
		success,
		language
	}
}

export default connect (
	mapStateToProps,
	actions
)(LoginForm);
