import React from 'react';

import styled from 'styled-components';

import { Container, Image } from 'semantic-ui-react';

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
	float: left;
`;

const Nav = styled.div`
	float: right;

	& li {
		display: inline-block;
		list-style: none;
	}

	& li a {
		padding: 15px 25px;
		background: #fff;
		color: #000 !important;
	}

	& li a:hover {
		background: rgb(117, 69, 194);
		color: #fff !important;
	}
`;

class Header extends React.Component<{}, {}> {
	public render() {
		return (
			<HeaderWrapper>
				<HeaderContainer>
					<Container fluid={true}>
						<Logo src={logo} width={70} />
						<Nav>
							<li>
								<a href="/">Portfolio</a>
								<a href="/">About Us</a>
							</li>
						</Nav>
					</Container>
				</HeaderContainer>
			</HeaderWrapper>
		);
	}
}

export default Header;
