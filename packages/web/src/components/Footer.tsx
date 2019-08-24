import React from 'react';
import styled from 'styled-components';

import { Container, Icon } from 'semantic-ui-react';

const FooterWrapper = styled.div`
	background: #aa251c !important;
	background: -webkit-linear-gradient(to left, #ea384d, #d31027);
	background: linear-gradient(to left, #ea384d, #d31027);
	line-height: 60px;
	height: 60px;
	width: 100%;
`;

const Copyright = styled.div`
	float: right;
	color: #fff;
	font-size: 14px;
`;

class Header extends React.Component<{}, {}> {
	public render() {
		return (
			<React.Fragment>
				<FooterWrapper>
					<Container>
						<Copyright></Copyright>
					</Container>
				</FooterWrapper>
			</React.Fragment>
		);
	}
}

export default Header;
