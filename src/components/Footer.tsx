import React from 'react';
import styled from 'styled-components';

import { Container } from 'semantic-ui-react';

const FooterWrapper = styled.div`
	background: rgb(117, 69, 194);
	line-height: 60px;
	height: 60px;
	width: 100%;
`;

const FooterDetail = styled.div`
	height: 400px;
	margin-top: 50px;
`;

class Header extends React.Component<{}, {}> {
	public render() {
		return (
			<React.Fragment>
				<FooterDetail>
					<Container>
						<h1>Footer Details</h1>
					</Container>
				</FooterDetail>
				<FooterWrapper />
			</React.Fragment>
		);
	}
}

export default Header;
