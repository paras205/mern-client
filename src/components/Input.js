import React from 'react';
import classnames from 'classnames';

const Input = ({ type, name, value, onchange, placeholder, label, error }) => {
	return (
		<div className={classnames('form-group', { error: error })}>
			{label && <label>{label}</label>}
			<input
				type={type}
				className="form-control"
				name={name}
				value={value}
				onChange={onchange}
				placeholder={placeholder}
			/>
			{error && <span className="text-danger">{error}</span>}
		</div>
	);
};

export default Input;
