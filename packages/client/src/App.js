import React from 'react';
import Router from './routes/Router';
import { DataProvider } from './store/GlobalState';
export default function App() {
	return (
		<>
			<DataProvider>
				<Router />
			</DataProvider>
		</>
	);
}
