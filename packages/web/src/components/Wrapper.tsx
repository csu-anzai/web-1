import React from 'react';

import Footer from './Footer';
import Header from './Header';

class Wrapper extends React.Component<{}, {}> {
	public render() {
		return (
			<React.Fragment>
				<Header />
				{this.props.children}
				<Footer />
			</React.Fragment>
		);
	}
}

export default Wrapper;
