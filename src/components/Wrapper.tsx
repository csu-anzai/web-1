import React from 'react';

import Header from './Header';

class Wrapper extends React.Component<{}, {}> {
	public render() {
		return (
			<React.Fragment>
				<Header />
				{this.props.children}
			</React.Fragment>
		);
	}
}

export default Wrapper;
