import React from 'react';
import styled from 'styled-components';

import { Grid, Button, Container, Icon } from 'semantic-ui-react';

import * as bg from '../assets/cubes.png';

const Jumbotron = styled.div`
	margin-top: -80px;
	text-align: center !important;
	padding-top: 16% !important;
	padding-bottom: 16% !important;

	background: #ed213a url(${bg}) !important;

	color: #eee !important;
	box-shadow: 0px 100px 100px -70px #000 inset;
	z-index: 10000;
`;

const Slogan = styled.div`
	width: 70% !important;
	margin: auto;
	text-shadow: 1px 1px #444 !important;
	font-size: 45px;
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

const ColouredIcon = styled(Icon)`
	color: #ed213a !important;
`;

const Portfolio = styled.div`
	margin-top: 50px !important;
`;

const PortfolioItem = styled.div`
	background: #fff;
	box-shadow: 0 4px 10px -6px #eee !important;
	height: 350px;
	width: 100%;
`;

const Contact = styled.div`
	box-shadow: 0 4px 10px -6px #eee !important;
	margin-top: 100px;
	height: 300px;
	background: #fff;
	padding-top: 50px;
`;

const Values = styled.div`
	padding: 50px 0;
	background: #fff !important;
	box-shadow: 0 4px 10px -6px #eee !important;

	& div.welcome {
		width: 100%;
		text-align: center;
		color: #d31027 !important;
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

const Value = styled(Container)`
	padding: 100px;
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
					<Button content="Get A Quote" />
				</Jumbotron>
				<Values>
					<Value>
						<Grid columns="equal">
							<Grid.Column width={3}>
								<ColouredIcon
									name="pen square"
									size="massive"
								/>
							</Grid.Column>
							<Grid.Column>
								<h2>Beautiful</h2>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Etiam non dolor eros. Praesent
								ut tempor elit. Suspendisse convallis mauris
								sapien, nec consequat arcu bibendum sed. Nec
								consequat arcu bibendum sed. Lorem ipsum dolor
								sit amet, consectetur adipiscing elit.
								<br />
								<br />
								Etiam non dolor eros. Praesent ut tempor elit.
								Suspendisse convallis mauris sapien, nec
								consequat arcu bibendum sed. Nec consequat arcu
								bibendum sed.
							</Grid.Column>
						</Grid>
					</Value>

					<Value>
						<Grid columns="equal">
							<Grid.Column>
								<h2>Competetive Pricing</h2>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Etiam non dolor eros. Praesent
								ut tempor elit. Suspendisse convallis mauris
								sapien, nec consequat arcu bibendum sed. Nec
								consequat arcu bibendum sed. Lorem ipsum dolor
								sit amet, consectetur adipiscing elit.
								<br />
								<br />
								Etiam non dolor eros. Praesent ut tempor elit.
								Suspendisse convallis mauris sapien, nec
								consequat arcu bibendum sed. Nec consequat arcu
								bibendum sed.
							</Grid.Column>
							<Grid.Column width={3}>
								<ColouredIcon name="bitcoin" size="massive" />
							</Grid.Column>
						</Grid>
					</Value>

					<Value>
						<Grid columns="equal">
							<Grid.Column width={3}>
								<ColouredIcon
									name="chess queen"
									size="massive"
								/>
							</Grid.Column>
							<Grid.Column>
								<h2>Elegant</h2>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Etiam non dolor eros. Praesent
								ut tempor elit. Suspendisse convallis mauris
								sapien, nec consequat arcu bibendum sed. Nec
								consequat arcu bibendum sed. Lorem ipsum dolor
								sit amet, consectetur adipiscing elit.
								<br />
								<br />
								Etiam non dolor eros. Praesent ut tempor elit.
								Suspendisse convallis mauris sapien, nec
								consequat arcu bibendum sed. Nec consequat arcu
								bibendum sed.
							</Grid.Column>
						</Grid>
					</Value>
				</Values>

				<Portfolio>
					<Container>
						<h1>Portfolio</h1>
						<Grid columns="equal">
							<Grid.Column>
								<PortfolioItem />
							</Grid.Column>
							<Grid.Column>
								<PortfolioItem />
							</Grid.Column>
							<Grid.Column>
								<PortfolioItem />
							</Grid.Column>
						</Grid>
						<Grid columns="equal">
							<Grid.Column>
								<PortfolioItem />
							</Grid.Column>
							<Grid.Column>
								<PortfolioItem />
							</Grid.Column>
							<Grid.Column>
								<PortfolioItem />
							</Grid.Column>
						</Grid>
					</Container>
				</Portfolio>
				<Contact>
					<Container>
						<h1>Contact Us</h1>
					</Container>
				</Contact>
			</React.Fragment>
		);
	}
}

export default Index;
