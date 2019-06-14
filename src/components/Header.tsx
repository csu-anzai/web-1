import React from 'react';

import styled from 'styled-components';

import { Button, Container } from 'semantic-ui-react';

const HeaderWrapper = styled.div`
	background: #fff;
	line-height: 100px;
	height: 100px;
`;

const QuoteButton = styled(Button)`
	border-radius: 0 !important;
	background: rgb(100, 110, 199) !important;
	color: #fff !important;
	height: 50px !important;
	padding: 0 30px !important;
	border-bottom-left-radius: 100px !important;
	border-top-left-radius: 100px !important;
	margin-top: 25px !important;
`;

class Header extends React.Component<{}, {}> {
	public render() {
		return (
			<HeaderWrapper>
				<Container fluid={true}>
					<QuoteButton floated={'right'} content={'Get A Quote'} />
				</Container>
			</HeaderWrapper>
		);
	}
}

export default Header;
