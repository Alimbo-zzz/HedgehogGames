import classNames from 'classnames';
import React from 'react';
import decor from '@images/decor_2.png';
import { useTranslation } from 'react-i18next';
import { Button, SVG } from '@UI';
import cls from './style.module.scss';



const About = (props) => {
	const { t, i18n } = useTranslation();
	const lang_section = t("sec-about", { returnObjects: true });
	const lang_buttons = t("buttons", { returnObjects: true });


	return (<>
		<section className={classNames(['section', cls.wrap])} id='about'>
			<img src={decor} className={cls.decor} />
			<div className={classNames(['container', cls.grid])}>
				<div className={cls.preview}>
					<h2 className='title' data-aos="fade-up">{lang_section.title}</h2>
					<p className={classNames(['text', cls.description])}>{lang_section.description}</p>
				</div>
				<div className={cls.content}>
					<h2 className="title">{lang_section['title-list']}</h2>
					<ul className={cls.list} >
						{lang_section.list.map((el, i) => <Item {...el} index={i} key={i} />)}
					</ul>
					<Button href="#contacts">{lang_buttons.connect}</Button>
				</div>
			</div>
		</section>
	</>);
}


function Item({ icon, text, index }) {

	return (<>
		<li className={cls.item} data-aos="fade-up">
			<div className={cls.item__head}>
				<SVG icon={icon} />
				<span className={cls.item__index}>{String(index + 1).padStart(2, '0')}</span>
			</div>
			<p className={cls.item__text}>{text}</p>
		</li>
	</>)
}

export default About;