import React from 'react';

import Header from './Header';
import Footer from './Footer';

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
