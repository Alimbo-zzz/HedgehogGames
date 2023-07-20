import { configureStore } from '@reduxjs/toolkit';

// slices
import * as theme from './theme';


const reducers = {
	theme: theme.default,
};

const actions = {
	...theme,
	default: ''
};





export default configureStore({
	reducer: { ...reducers }
})

export {
	reducers,
	actions
};