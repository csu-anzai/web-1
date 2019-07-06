import React from 'react';

import styled from 'styled-components';

import { Container, Image, Icon } from 'semantic-ui-react';

import * as logo from '../assets/brand/logoicon_trans.png';

const HeaderWrapper = styled.div`
	/* background: rgba(255, 255, 255, 0.9); */
	/* box-shadow: 0 4px 20px -6px #f1f1f1 !important; */
	line-height: 80px;
	height: 80px;
	width: 100%;
`;

const Logo = styled(Image)`
	float: left;
	padding-top: 20px !important;
`;

const Socials = styled.div`
	float: right;
	padding-top: 10px;
	& a {
		color: #eee !important;
		padding: 0 7px;
	}

	& a:hover {
		color: rgb(117, 69, 194) !important;
	}
`;

class Header extends React.Component<{}, {}> {
	public render() {
		return (
			<HeaderWrapper>
				<Container fluid={false}>
					<Logo src={logo} width={60} />
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
