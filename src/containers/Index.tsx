import React from 'react';
import styled from 'styled-components';

import { Grid, Button, Container, Icon } from 'semantic-ui-react';

import * as bg from '../assets/background.png';

const Jumbotron = styled.div`
	margin-top: -80px;
	text-align: center !important;
	padding-top: 15% !important;
	padding-bottom: 15% !important;
	background: url(${bg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	color: #eee !important;
`;

const Slogan = styled.div`
	width: 70% !important;
	margin: auto;
	font-size: 45px;
	/* font-family: 'Dancing Script', cursive; */
	font-family: 'Abel', sans-serif;
	display: block;
	margin-bottom: 40px;
	font-weight: bold;
`;

const SecondarySlogan = styled.div`
	font-size: 20px;
	font-family: 'Abel', sans-serif;
	display: block;
	margin-bottom: 40px;
	font-weight: bold;
`;

const AboutContent = styled.div`
	padding: 70px;
	background: #fff !important;

	& div.welcome {
		width: 100%;
		text-align: center;
		color: rgb(117, 69, 194) !important;
		font-family: 'Abel', sans-serif;
		font-size: 20px;
	}

	h1 {
		text-align: center;
		margin-bottom: 30px;
	}

	& p {
		text-align: center;
	}
`;

const CenteredGridColumn = styled(Grid.Column)`
	text-align: center;
`;

const GridPadding = styled.div`
	padding: 60px 0;
	& div {
		padding-top: 0px;
	}
`;

const PurpleIcon = styled(Icon)`
	color: rgb(117, 69, 194) !important;
`;

const Portfolio = styled.div`
	padding: 30px;
	height: 500px;
`;

class Index extends React.Component<any, any> {
	public render() {
		return (
			<React.Fragment>
				<Jumbotron>
					<Slogan>Beautiful & Elegant Consulting Solutions</Slogan>
					<SecondarySlogan>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry
					</SecondarySlogan>
					<Button color="purple" content="Get A Quote" />
				</Jumbotron>
				<AboutContent>
					<Container fluid={false}>
						<div className="welcome">Welcome to Us</div>
						<h1>Top Consulting Agency</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Etiam non dolor eros. Praesent ut tempor elit.
							Suspendisse convallis mauris sapien, nec consequat
							arcu bibendum sed. Nec consequat arcu bibendum sed.
						</p>
						<Grid columns="equal">
							<CenteredGridColumn>
								<GridPadding>
									<PurpleIcon name="code" size="big" />
									<h2>Elegant</h2>
									<div>
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum is simply dummy text of the
										printing and typesetting industry.
									</div>
								</GridPadding>
							</CenteredGridColumn>
							<CenteredGridColumn>
								<GridPadding>
									<PurpleIcon name="modx" size="big" />
									<h2>Beautiful</h2>
									<div>
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum is simply dummy text of the
										printing and typesetting industry.
									</div>
								</GridPadding>
							</CenteredGridColumn>
							<CenteredGridColumn>
								<GridPadding>
									<PurpleIcon name="bitcoin" size="big" />
									<h2>Competetive Pricing</h2>
									<div>
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum is simply dummy text of the
										printing and typesetting industry.
									</div>
								</GridPadding>
							</CenteredGridColumn>
						</Grid>
					</Container>
				</AboutContent>
				<Portfolio>
					<Container />
				</Portfolio>
			</React.Fragment>
		);
	}
}

export default Index;
