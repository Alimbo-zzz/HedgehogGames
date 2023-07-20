import React from 'react';
import cls from './style.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';



const Button = (events) => {
	const { href = null, className, type = 'base', theme = true, children, ...props } = events;
	const siteTheme = useSelector(state => state.theme.value);

	return (<>
		{
			href
				? (
					<a {...props}
						href={href}
						className={classNames([cls.btn, className])}
						data-type={type}
						data-theme={theme ? siteTheme : 'none'}
					>
						<div className={cls.btn__content}>{children}</div>
					</a>
				)
				: (
					<button {...props}
						className={classNames([cls.btn, className])}
						data-type={type}
						data-theme={theme ? siteTheme : 'none'}
					>
						<div className={cls.btn__content}>{children}</div>
					</button>
				)
		}
	</>);
}

Button.propTypes = {
	href: PropTypes.string,
	type: PropTypes.oneOf(['base', 'border']),
	theme: PropTypes.bool
}

export default Button;