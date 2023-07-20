import classNames from 'classnames';
import React from 'react';
import cls from './style.module.scss'
import { useTranslation } from 'react-i18next';
import { AppBox } from '@components';
import { Button } from '@UI';

import cards_img from '@images/pandemonium_cards.png';
import pandemonium from '@images/pandemonium.png'


const Pandemonium = (props) => {
	const { t, i18n } = useTranslation();
	const lang_section = t("sec-pandemonium", { returnObjects: true });
	const lang_buttons = t("buttons", { returnObjects: true });


	return (<>
		<section className={classNames('section', cls.wrap)} id='pandemonium'>
			<div className={classNames('decor-blur', cls.decor)} />
			<div className={classNames('container', cls.grid)}>
				<h2 className='title' data-aos="fade-up">{lang_section.title}</h2>
				<img className={cls.preview} src={cards_img} data-aos="zoom-out-up" />
				<AppBox
					foot={<Button style={{ fontSize: '0.8em' }} target='_blanck' type='border' theme={false} href="https://pandemoniumw.com/">{lang_buttons.website}</Button>}
					preview={pandemonium}
					name="Pandemonium"
					description={lang_section['game-description']}
				/>
			</div>
		</section>
	</>);
}

export default Pandemonium;