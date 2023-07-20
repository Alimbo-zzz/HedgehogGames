import React from 'react'
import ReactDOM from 'react-dom/client'

// modules
import App from '@/App.jsx';
import { Wrapper } from '@layouts';


// vars
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<>
	<Wrapper>
		<App />
	</Wrapper>
</>)
