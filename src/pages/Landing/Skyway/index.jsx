import React from 'react';
import cls from './style.module.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { AppBox } from '@components';

import skyway_screen from '@images/skyway_sceen.png';
import ue_logo from '@images/ue_hg_logo.png';
import { useTranslation } from 'react-i18next';

const Skyway = (props) => {
	const theme = useSelector(state => state.theme.value);
	const { t, i18n } = useTranslation();
	const lang_section = t("sec-skyway", { returnObjects: true });
	const game = {
		name: "SkyWay", preview: ue_logo,
		description: lang_section['game-description']
	}


	return (<>
		<section className={classNames('section', cls.wrap)} id='skyway'>
			<div className={classNames(['decor-blur', cls.decor])} data-theme={theme} />
			<div className={classNames(cls.container, 'container')}>
				<div className={cls.head}>
					<h2 className='title' data-aos="fade-up" data-theme={theme} >{lang_section.title}</h2>
					<p className={cls.text}>{lang_section.description}</p>
				</div>

				<div className={cls.previews}>
					<img src={skyway_screen} className={cls.previews__screen} data-aos="flip-left" />
					<AppBox {...game} className={cls.box} />
				</div>
			</div>
		</section>
	</>);
}

export default Skyway;