import React from 'react';

import Footer from './Footer';
import Header from './Header';

const Wrapper: React.FC<{}> = props => {
	return (
		<React.Fragment>
			<Header />
			{props.children}
			<Footer />
		</React.Fragment>
	);
};

export default Wrapper;
