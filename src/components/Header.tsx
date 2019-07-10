import React from 'react';

import styled from 'styled-components';

import { Container, Image, Icon } from 'semantic-ui-react';

import * as logo from '../assets/brand2/logo_transparent.png';

const HeaderWrapper = styled.div`
	background: rgba(255, 255, 255, 0.9);
	box-shadow: 0 4px 20px -6px #f1f1f1 !important;
	line-height: 80px;
	height: 80px;
	width: 100%;
`;

const Logo = styled(Image)`
	float: left;
	padding-top: 35px !important;
`;

const Socials = styled.div`
	float: right;
	padding-top: 20px;
	& a {
		color: #eee !important;
		padding: 0 7px;
	}

	& a:hover {
		/* color: #3a1c71 !important;
		color: -webkit-linear-gradient(
			to right,
			#3a1c71,
			#d76d77,
			#ffaf7b
		) !important;
		color: linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b) !important; */
	}
`;

class Header extends React.Component<{}, {}> {
	public render() {
		return (
			<HeaderWrapper>
				<Container fluid={false}>
					<Logo src={logo} width={150} />
					<Socials>
						<a href="/">
							<Icon name="instagram" size="big" />
						</a>
						<a href="/">
							<Icon name="facebook" size="big" />
						</a>
						<a href="/">
							<Icon name="twitter" size="big" />
						</a>
					</Socials>
				</Container>
			</HeaderWrapper>
		);
	}
}

export default Header;
