import React from 'react';
import cls from './style.module.scss';
import PropTypes from 'prop-types';
const teamImages = import.meta.glob(`@images/team/**/*.png`, { eager: true });
import { useGallery } from "@hooks";


CharacterBox.propTypes = {
	name: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired,
}


function CharacterBox({ name, position, picture }) {
	const { obj } = useGallery(teamImages);

	return (<>
		<div className={cls.wrap}>
			<div className={cls.wrap__content}>
				<img src={obj[picture]} className={cls.picture} />
				<div className={cls.name}>{name}</div>
				<div className={cls.position}>{position}</div>
			</div>
		</div>
	</>);
}

export default CharacterBox;