import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

import LoginForm from '../components/LoginForm/LoginForm.js';

class App extends Component {
	render = () => {
		return (
			<div>
				<LoginForm />
			</div>
		);
	}
}

export default App;
