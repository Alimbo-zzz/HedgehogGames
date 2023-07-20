import React from 'react';
import cls from './style.module.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classNames from 'classnames';



AppBox.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	preview: PropTypes.string.isRequired,
	links: PropTypes.arrayOf(
		PropTypes.exact({ url: PropTypes.string, img: PropTypes.string })
	),
};


function AppBox({ name, preview, foot = null, description, links = [], className }) {
	const theme = useSelector(state => state.theme.value);

	return (<>
		<div className={classNames([cls.wrap, className])} data-theme={theme} data-aos="zoom-in" >
			<img src={preview} className={cls.logo} />
			<div className={cls.info}>
				<h4 className={cls.name}>{name}</h4>
				<p className={classNames(['text', cls.description])} data-links={links.length ? true : false}>{description}</p>
				{(links.length && !foot) ? (<Links links={links} />) : null}
				{foot && foot}
			</div>
		</div>
	</>);
}


function Links({ links }) {
	return (<>
		<div className={cls.links}>
			{links.map((el, i) => (
				<a className={cls.link} target='_blank' key={i} href={el.url}>
					<img src={el.img} />
				</a>
			))}
		</div>
	</>)
}



export default AppBox;