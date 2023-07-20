import classNames from 'classnames';
import React from 'react';
import cls from './style.module.scss';
import { Button } from '@UI'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import promogames_img from '@images/promogames.png'


const PromoGames = (props) => {
	const { t, i18n } = useTranslation();
	const lang_section = t("sec-promo-games", { returnObjects: true });
	const lang_buttons = t("buttons", { returnObjects: true });
	const theme = useSelector(state => state.theme.value);

	return (<>
		<section className={classNames(['section', cls.wrap])} id='promo-games'>
			<div className={classNames(['decor-blur', cls.decor])} data-theme={theme} />
			<div className={cls.lines}>
				<span data-size='3' className={cls.lines__line} data-aos="fade-right" data-aos-delay="600" />
				<span data-size='1' className={cls.lines__line} data-aos="fade-right" data-aos-delay="200" />
				<span data-size='2' className={cls.lines__line} data-aos="fade-right" data-aos-delay="400" />
			</div>
			<div className={classNames(['container', cls.grid])}>
				<h2 className='title' data-aos="fade-up" >{lang_section.title}</h2>
				<p className={classNames(["text", cls.description])}>{lang_section.description}</p>
				<div className={cls.preview} data-aos="flip-right" >
					<img src={promogames_img} />
				</div>
				<Button className={cls.btn} type='border' href="https://promo.hedgehoggames.tech" target="_blank">{lang_buttons.website}</Button>
			</div>
		</section>
	</>);
}

export default PromoGames;