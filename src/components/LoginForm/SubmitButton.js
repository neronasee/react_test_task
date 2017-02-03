import React, { PropTypes } from 'react';

const SubmitButton = ({text="Submit", processing=false}) => {
	const processingClass = processing ? "login-form__button--loading disabled" : ""
	return (
		<button
			type="submit"
			className={`btn login-form__button btn-default ${processingClass}`}>
			{text}
		</button>
	)
}

SubmitButton.propTypes = {
	text: PropTypes.string,
	processing: PropTypes.bool
}

export default SubmitButton;
