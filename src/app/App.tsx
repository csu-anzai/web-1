import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Wrapper from '../components/Wrapper';

import Index from '../containers/Index';

class App extends React.Component<any, any> {
	public render() {
		return (
			<BrowserRouter>
				<Wrapper>
					<Route exact={true} path="/" component={Index} />
				</Wrapper>
			</BrowserRouter>
		);
	}
}

export default App;
