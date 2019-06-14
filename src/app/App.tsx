import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Index from '../containers/Index';

class App extends React.Component<any, any> {
	public render() {
		return (
			<BrowserRouter>
				<Route exact={true} path="/" component={Index} />
			</BrowserRouter>
		);
	}
}

export default App;
