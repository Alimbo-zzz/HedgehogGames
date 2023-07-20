import React from 'react';
import '@/styles/index.scss';
import {Provider} from 'react-redux';
import ContextWrap from '@contexts/ContextWrap.jsx';
import store from '@/store';


function Wrapper({children}) {
  return (
		<Provider store={store}>
			<ContextWrap>
				{children}
			</ContextWrap>
		</Provider>
  );
}

export default Wrapper;
