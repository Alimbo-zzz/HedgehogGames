import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from '@/store';

const allActions = {...actions};

export default (reducerName) => {
	const dispatch = useDispatch();

	return bindActionCreators(allActions, dispatch);
};
