import React from 'react';
import styled from 'styled-components';

import { Container, Grid, Icon } from 'semantic-ui-react';

import * as bg from '../assets/world_map_dots.png';

const FooterWrapper = styled.div`
	background: #000011 !important;
	background: -webkit-linear-gradient(to left, #ea384d, #d31027);
	background: linear-gradient(to left, #ea384d, #d31027);

	background: #000011 url(${bg}) no-repeat center !important;
	background-size: 70% !important;
	overflow: hidden;

	height: 500px;
	width: 100%;
`;

const InnerContainer = styled(Container)`
	height: 485px;
	color: #ffffff;
`;

const Copyright = styled.div`
	color: #fff;
`;

const SGrid = styled(Grid)`
	display: flex;
	align-content: space-between;
	justify-content: space-between;
	height: 100%;

	vertical-align: bottom;
`;

const SRow = styled(Grid.Row)`
	display: flex !important;
`;

const SColumn = styled(Grid.Column)`
	display: flex !important;
	justify-content: space-between !important;
	align-items: flex-end;
	height: 50px !important;
	font-size: 12px;
	color: #efefef;
`;

const SIcon = styled(Icon)``;

const Footer: React.FC<{}> = () => {
	return (
		<React.Fragment>
			<FooterWrapper>
				<InnerContainer>
					<SGrid columns={'equal'}>
						<SRow>
							<SColumn>Contact Us</SColumn>
							<SColumn>About Us</SColumn>
							<SColumn></SColumn>
						</SRow>
						<SRow>
							<SColumn>
								<Copyright>
									Copyright © 2019 App Maven Ltd. All rights
									reserved.
								</Copyright>
							</SColumn>
							<SColumn>
								{
									'Privacy Policy \u007C Terms of Use \u007C Sales and Refunds'
								}
							</SColumn>
							<SColumn>
								<SIcon size={'large'} name={'facebook'} />
								<SIcon size={'large'} name={'instagram'} />
								<SIcon size={'large'} name={'twitter'} />
							</SColumn>
						</SRow>
					</SGrid>
				</InnerContainer>
			</FooterWrapper>
		</React.Fragment>
	);
};

export default Footer;
