import classNames from 'classnames';
import React from 'react';
import cls from './style.module.scss'
import { useTranslation } from 'react-i18next';
import { Socials } from "@components";
import decor from "@images/decor_1.png"
import letter from "@images/letter.png"
import { useSelector } from 'react-redux';


const Contacts = (props) => {
	const { t, i18n } = useTranslation();
	const lang_section = t("sec-contacts", { returnObjects: true });
	const theme = useSelector(state => state.theme.value);


	return (<>
		<section className={classNames(['section', cls.wrap])} id='contacts'>
			<div className={classNames(['container', cls.grid])}>
				<h2 className='title' data-aos="fade-up">{lang_section.title}</h2>
				<div className={cls.mail}>hgames@hedgehogtech.ru</div>
				<Socials type={theme === 'dark' ? 'grad' : 'white'} direction='row' />
				<div className={cls.decor} data-aos="fade-right">
					<img src={decor} className={cls.decor__line} />
					<img src={letter} className={cls.decor__letter} />
				</div>
			</div>
		</section>
	</>);
}

export default Contacts;