import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import character from '@images/hedgehog.png';
import stars_img_1 from '@images/icons/stars_1.svg';
import stars_img_2 from '@images/icons/stars_2.svg';
import scroll_img from '@images/scroll.png';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, SVG } from "@UI";
import { Socials } from '@components';


const Scroll = (props) => {

	return (<>
		<a className={cls.scroll} href='#about'>
			<img src={scroll_img} />
			<div className={cls.scroll__content}>
				scroll
				<SVG icon='arrow-down' />
			</div>
		</a>
	</>)
}


const Intro = (props) => {
	const { t, i18n } = useTranslation();
	const lang_section = t("sec-intro", { returnObjects: true });
	const lang_buttons = t("buttons", { returnObjects: true });
	const theme = useSelector(state => state.theme.value);
	const stars_icon = (theme === 'dark') ? stars_img_1 : stars_img_2;


	return (<>
		<section className={cls.wrap} id='intro'>
			<div className={classNames(['decor-blur', cls.decor_1])} data-theme={theme} />
			<div className={classNames(['decor-blur', cls.decor_2])} />
			<div className={classNames(['container', cls.grid])}>
				<div className={cls.grid__content} >
					<h1 className={classNames(["title", cls.title])} data-aos="fade-right">
						{lang_section.title} <img src={stars_icon} />
					</h1>
					<p className={classNames([cls.description])} data-aos="fade-right" data-aos-delay="100"> {lang_section.description} </p>
					<Button href="#contacts" className={cls.btn} data-aos="fade-right" data-aos-delay="200">{lang_buttons.connect}</Button>
					<Socials className={cls.socials} />
				</div>
				<div className={cls.grid__preview}>
					<img src={character} className={cls.character} data-aos="zoom-in-up" />
					<Scroll />
				</div>
			</div>
		</section>
	</>);
}

export default Intro;