import classNames from 'classnames';
import React from 'react';
import cls from './style.module.scss'
import { useTranslation } from 'react-i18next';
import { AppBox } from '@components';
import novella_preview from '@images/passion_stories_logo.png';
import novella_screen_1 from '@images/passion_stories_screen_1.png';
import novella_screen_1_ru from '@images/passion_stories_screen_1_ru.png';
import novella_screen_2 from '@images/passion_stories_screen_2.png';
import novella_screen_2_ru from '@images/passion_stories_screen_2_ru.png';
import appstore_icon from '@images/icons/appstore.svg';
import { useSelector } from 'react-redux';
const novella_url = 'https://apps.apple.com/us/app/passion-stories-your-choice/id6443699708';

const Novella = (props) => {
	const { t, i18n } = useTranslation();
	const lang_section = t("sec-novella", { returnObjects: true });
	const theme = useSelector(state => state.theme.value);

	const screen_1 = (i18n.language === 'en') ? novella_screen_1 : novella_screen_1_ru;
	const screen_2 = (i18n.language === 'en') ? novella_screen_2 : novella_screen_2_ru;

	return (<>
		<section className={classNames(['section', cls.wrap])} id='novella'>
			<div className={classNames(['decor-blur', cls.decor_1])} />
			<div className={classNames(['decor-blur', cls.decor_2])} data-theme={theme} />
			<div className={classNames(['container', cls.grid])}>
				<div className={cls.grid__content}>
					<h2 className='title' data-aos="fade-up" >{lang_section.title}</h2>
					<AppBox
						{...lang_section.novella}
						links={[{ url: novella_url, img: appstore_icon }]}
						preview={novella_preview}
					/>
				</div>
				<div className={cls.grid__preview} data-aos="fade-left">
					<img src={screen_1} />
					<img src={screen_2} />
				</div>
			</div>
		</section>
	</>);
}

export default Novella;