import React from 'react';
import PropTypes from 'prop-types';

export interface IButton {
	label: string;
	className: string;
	disabled?: boolean;
	handleClick?: () => void;
}

const Button = (props: IButton) => {
	const { label, className, disabled, handleClick } = props;
	return (
		<button
			className={className}
			onClick={handleClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
};

Button.propTypes = {
	label: PropTypes.any.isRequired,
	className: PropTypes.string,
	handleClick: PropTypes.func,
	disabled: PropTypes.bool,
};

export default Button;
