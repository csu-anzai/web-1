import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Wrapper from '../components/Wrapper';

import Index from '../containers/Index';
import Quote from '../containers/Quote';

import { getStores } from '@appmaven/redux';

const App: React.FunctionComponent<{}> = () => {
	const stores = getStores();
	return (
		<Provider store={stores.store}>
			<BrowserRouter>
				{/* <Wrapper> */}
				<Route exact={true} path="/" component={Index} />
				<Route exact={true} path="/quote" component={Quote} />
				{/* </Wrapper> */}
			</BrowserRouter>
		</Provider>
	);
};

export default App;
