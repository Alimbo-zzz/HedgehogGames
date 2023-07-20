import React from 'react';
import Icons from './sprite.svg';
import PropTypes from 'prop-types';

const Icon = (events) => {
	const {icon, color, ...props} = events;
	
	return (<>
		<svg {...props} fill={color}>
			<use xlinkHref={`${Icons}#${icon}`} />
		</svg>
	</>);
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Icon;