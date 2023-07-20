import { createSlice } from '@reduxjs/toolkit';



const theme = createSlice({
	name: 'theme',
	initialState: { value: "dark" },
	reducers: {
		toggleTheme(state, action) {
			const themes = ['dark', 'light'];
			let newValue = state.value === 'light' ? 'dark' : 'light';
			state.value = newValue;
		}
	}
})

const { actions, reducer } = theme;


export const { toggleTheme } = actions;
export default reducer;