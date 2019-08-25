import React from 'react';

import styled from 'styled-components';

import { Container, Image } from 'semantic-ui-react';

import * as logo from '../assets/brand2/logo_transparent.png';

const HeaderWrapper = styled.div`
	line-height: 120px;
	height: 120px;
	width: 100%;
	z-index: 1000000;
`;

const Logo = styled(Image)`
	float: left;
	padding-top: 35px !important;
`;

const Navigation = styled.div`
	float: right;
	& a {
		color: #eee !important;
		padding: 5px 20px;
	}

	& a li {
		display: inline-block;
		list-style: none;
	}

	& a:hover {
	}
`;

const Header: React.FC = () => {
	return (
		<HeaderWrapper>
			<Container fluid={false}>
				<Logo src={logo} width={140} />
				<Navigation>
					<a href="/">
						<li>Porfolio</li>
					</a>
					<a href="/">
						<li>Contact Us</li>
					</a>
				</Navigation>
			</Container>
		</HeaderWrapper>
	);
};

export default Header;
