import React from 'react';
import cls from './style.module.scss';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const Navigation = ({ className, type = 'base', closeNavMenu }) => {
	const { t } = useTranslation();
	const nav = t("nav", { returnObjects: true });


	return (<>
		<nav className={classNames([className, cls.wrap])} data-type={type}>
			{nav.map((el, i) => (
				<a
					href={el.link}
					key={i}
					className={cls.link}
					onClick={closeNavMenu}
				>{el.value}</a>
			))}
		</nav>
	</>);
}

Navigation.propTypes = {
	type: PropTypes.oneOf(['base', 'dashed'])
}

export default Navigation;