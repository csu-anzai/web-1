import React from 'react';

import styled from 'styled-components';

import { Button, Container, Image } from 'semantic-ui-react';

import * as logo from '../assets/brand/logoicon.png';

const HeaderWrapper = styled.div`
	background: rgba(255, 255, 255, 0.9);
	line-height: 100px;
	height: 100px;
`;

const HeaderContainer = styled.div`
	padding-left: 20px;
	padding-right: 20px;
`;

const Logo = styled(Image)`
	padding-top: 15px;
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
				<HeaderContainer>
					<Container fluid={true}>
						<Logo src={logo} width={70} />
					</Container>
				</HeaderContainer>
			</HeaderWrapper>
		);
	}
}

export default Header;
