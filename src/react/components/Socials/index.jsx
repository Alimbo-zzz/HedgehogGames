import classNames from 'classnames';
import React from 'react';
import cls from './style.module.scss';
import { SVG } from '@UI';
import envelope_grad from '@images/icons/envelope_grad.svg';
import tg_grad from '@images/icons/tg_grad.svg';
import PropTypes from 'prop-types';

const Socials = ({ className, direction = 'column', type = 'base' }) => {
	const socials = [
		{ url: "https://t.me/hdghggame", icon: (type === 'grad') ? tg_grad : "telegram", name: "telegram" },
		{ url: "mailto:hgames@hedgehogtech.ru", icon: (type === 'grad') ? envelope_grad : "envelope", name: "mail" },
	]

	return (<>
		<div
			className={classNames([cls.socials, className])}
			data-direction={direction}
			data-type={type}
		>
			{socials.map((el, i) => (
				<a key={i} href={el.url} target='_blank' data-name={el.name}>
					{type !== 'grad' && <SVG icon={el.icon} />}
					{type === 'grad' && <img src={el.icon} />}
				</a>
			))}
		</div>
	</>);
}



Socials.propTypes = {
	type: PropTypes.oneOf(['base', 'grad', 'white']),
	direction: PropTypes.oneOf(['row', 'column'])
}


export default Socials;