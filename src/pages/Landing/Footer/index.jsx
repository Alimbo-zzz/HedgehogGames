import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import { SelectTheme, Navigation } from '@components';
import { useSelector } from 'react-redux';
// import gradient_bg from '@images/gradient_1.png';

const Footer = (props) => {
	const theme = useSelector(state => state.theme.value);

	return (<>
		<footer className={cls.wrap}>
			<div className={classNames(['decor-blur', cls.decor])} data-theme={theme} />
			<div className={classNames(['container', cls.grid])}>
				<p className={cls.info}>
					Postal address: Russian Federation.
					<br />
					St. Petersburg. Ligovsky prospect 50.
					<br />
					Postal Code: 190000
					<br />
					STO: Oleg Serdiuk
					<br />
					<a className='link' href="mailto:oleg-s32@yandex.ru" target='_blank'>oleg-s32@yandex.ru</a>
				</p>

				<Navigation type='dashed' className={cls.nav} />

				<div className={cls.block}>
					<SelectTheme className={cls.selectTheme} />
					<p className={cls.created}>
						© 2022. Hedgehog Games. All rights
						<br />
						reserved.
					</p>
				</div>
			</div>
		</footer>
	</>);
}

export default Footer;