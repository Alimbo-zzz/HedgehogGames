import React from 'react';
import {
	Header, Footer, About,
	Contacts, Intro, MobileGames,
	Novella, Pandemonium, PromoGames,
	Skyway, Team
} from './components';

import cls from './style.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


const Landing = (props) => {
	const { i18n } = useTranslation();
	const theme = useSelector(state => state.theme.value);


	return (<>
		<div className={cls.wrapper} data-lang={i18n.language} data-theme={theme} id='wrapper'>
			<div id='top' />
			<Header className={cls.header} />
			<main className={cls.main}>
				<Intro />
				<About />
				<Novella />
				<MobileGames />
				<Skyway />
				<PromoGames />
				<Pandemonium />
				<Team />
				<Contacts />
			</main>
			<Footer className={cls.footer} />
		</div>
	</>);
}

export default Landing;