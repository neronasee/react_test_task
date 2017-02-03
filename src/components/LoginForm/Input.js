import React, { PropTypes } from 'react';

const Input = ({type="text", value, placeholder, changeHandler, error=false}) => (
	<div className={error ? "has-error" : ""}>
		<input
			type={type}
			value={value}
			placeholder={placeholder}
			className="form-control login-form__field"
			onChange={changeHandler}/>

	</div>
);

Input.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	changeHandler: PropTypes.func.isRequired,
	error: PropTypes.bool
}

export default Input;
