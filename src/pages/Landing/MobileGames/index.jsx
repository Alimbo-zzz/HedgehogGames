import React, { useState } from 'react';
import cls from './style.module.scss';
import classNames from "classnames";


import huggy_img from '@images/huggy.png';
import shoot_img from '@images/shoot_runner.png';
import pur_img from '@images/pur_runner_logo.png';
import huggy_creen from '@images/huggy_breaker_screen.png';
import shoot_creen from '@images/shoot_runner_screen.png';
import pur_creen from '@images/pur_runner_screen.png';

import googlePlay_svg from '@images/icons/googleplay.svg';
import appStore_svg from '@images/icons/appstore.svg';
import { useSelector } from 'react-redux';
import { AppBox } from '@components';
import { useTranslation } from 'react-i18next';


const MobileGames = (props) => {
	const theme = useSelector(state => state.theme.value);
	const { t, i18n } = useTranslation();
	const lang_section = t("sec-mobile-games", { returnObjects: true });
	const findGameDesc = (name) => lang_section.games.find(el => el.name === name)?.description || 'err';


	const games = [
		{
			name: "Huggy Breaker", preview: huggy_img,
			description: findGameDesc("Huggy Breaker"),
			links: [{ url: "https://play.google.com/store/apps/details?id=com.HedgehogTech.HuggyBreaker", img: googlePlay_svg }]
		},
		{
			name: "Shoot Runner", preview: shoot_img,
			description: findGameDesc("Shoot Runner"),
			links: [{ url: "https://play.google.com/store/apps/details?id=com.hedgehog.shootrunner", img: googlePlay_svg }]
		},
		{
			name: "Pur Runner", preview: pur_img,
			description: findGameDesc("Pur Runner"),
			links: [{ url: "https://play.google.com/store/apps/details?id=com.Hedgehog.Purrunner", img: googlePlay_svg }]
		},
	];


	return (<>
		<section className={classNames('section', cls.wrap)} id='mobile-games'>
			<div className={classNames(['decor-blur', cls.decor])} data-theme={theme} />
			<div className={classNames([cls.container, 'container'])}>
				<h2 className='title' data-aos="fade-up" data-theme={theme} >{lang_section.title}</h2>
				<ul className={cls.list}>
					{games.map((el, i) => (<li className={cls.item} key={i}>
						<AppBox {...el} />
					</li>))}
				</ul>

				<div className={cls.previews} data-aos="fade-up">
					<img src={huggy_creen} />
					<img src={pur_creen} />
					<img src={shoot_creen} />
				</div>
			</div>
		</section>
	</>);
}

export default MobileGames;