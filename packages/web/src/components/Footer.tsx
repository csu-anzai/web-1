import React from 'react';
import styled from 'styled-components';

import { Container } from 'semantic-ui-react';

const FooterWrapper = styled.div`
	background: #000011 !important;
	background: -webkit-linear-gradient(to left, #ea384d, #d31027);
	background: linear-gradient(to left, #ea384d, #d31027);
	height: 400px;
	width: 100%;
`;

const Copyright = styled.div`
	float: right;
	color: #fff;
	font-size: 14px;
`;

const Footer: React.FC<{}> = () => {
	return (
		<React.Fragment>
			<FooterWrapper>
				<Container>
					<Copyright></Copyright>
				</Container>
			</FooterWrapper>
		</React.Fragment>
	);
};

export default Footer;
