import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import Wrapper from '../components/Wrapper';

import Index from '../containers/Index';
import Quote from '../containers/Quote';

import { getStores } from '@appmaven/redux';

const App: React.FunctionComponent<{}> = () => {
	const stores = getStores();
	return (
		<ParallaxProvider>
			<Provider store={stores.store}>
				<BrowserRouter>
					<Wrapper>
						<Route exact={true} path="/" component={Index} />
						<Route exact={true} path="/quote" component={Quote} />
					</Wrapper>
				</BrowserRouter>
			</Provider>
		</ParallaxProvider>
	);
};

export default App;
