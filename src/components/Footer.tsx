import React from 'react';

import styled from 'styled-components';
import { Container, Icon, Grid, Image } from 'semantic-ui-react';

const FooterPadding = styled.div`
	padding-left: 20px;
	padding-right: 20px;
`;

const FooterContainer = styled.div`
	width: 100%;
	background: #fefefe;
	height: 300px;
	margin-top: 100px;
`;

const Padding = styled.div`
	padding: 20px;
`;

const UnderFooter = styled.div`
	height: 70px;
	width: 100%;
	background: rgb(117, 69, 194);
	color: #fff;
	line-height: 70px;
`;

const Left = styled.div`
	float: left;
`;

const Right = styled.div`
	float: right;
`;

class Footer extends React.Component<{}, {}> {
	public render() {
		return (
			<React.Fragment>
				<FooterContainer>
					<Padding>
						<Grid columns="equal">
							<Grid.Column>
								<Image src="" />
							</Grid.Column>
							<Grid.Column>
								<h3>Address</h3>
							</Grid.Column>
							<Grid.Column>
								<h3>Contact Details</h3>
							</Grid.Column>
							<Grid.Column>
								<h3>Contact Us</h3>
							</Grid.Column>
						</Grid>
					</Padding>
				</FooterContainer>
				<UnderFooter>
					<FooterPadding>
						<Container fluid={true}>
							<Left>
								App Maven <Icon name="copyright outline" />{' '}
								2019. All Rights Reserved.
							</Left>
							<Right>Contact Us</Right>
						</Container>
					</FooterPadding>
				</UnderFooter>
			</React.Fragment>
		);
	}
}

export default Footer;
