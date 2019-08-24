import React from 'react';

import styled from 'styled-components';

import { Container, Image, Icon } from 'semantic-ui-react';

import * as logo from '../assets/brand2/logo_transparent.png';

const HeaderWrapper = styled.div`
	position: fixed;
	background: #aa251c;
	line-height: 120px;
	height: 120px;
	width: 100%;
	z-index: 1000000;
`;

const Logo = styled(Image)`
	float: left;
	padding-top: 35px !important;
`;

const Socials = styled.div`
	float: right;
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
					<Logo src={logo} width={120} />
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
