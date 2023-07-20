import React from 'react';
import cls from './style.module.scss';
import { useActions } from '@hooks';
import { SVG } from '@UI';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

const SelectTheme = ({ className }) => {
	const { toggleTheme } = useActions();
	const changeTheme = (e) => toggleTheme();
	const theme = useSelector(state => state.theme.value);


	return (<>
		<label className={classNames([cls.wrap, className])} data-theme={theme}>
			<input type="checkbox" onChange={changeTheme} />
			<span className={cls.select} />
			<SVG icon='moon' className={cls.moon} />
			<SVG icon='sun' className={cls.sun} />
		</label>
	</>);
}

export default SelectTheme;