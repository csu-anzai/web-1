import React from 'react';
import styled from 'styled-components';

import { config, Spring } from 'react-spring/renderprops';
import { Button, Container, Grid } from 'semantic-ui-react';

import Value from '../components/Value';

import * as bg from '../assets/bg1.jpeg';

const Jumbotron = styled.div`
	text-align: center !important;
	padding-top: 15% !important;
	padding-bottom: 15% !important;

	background: #aa251c url(${bg}) !important;
	background-size: 100% !important;
	box-shadow: 0px 100px 100px -90px #000 inset;

	color: #eee !important;
	z-index: 10000;

	line-height: 1 !important;
`;

const Slogan = styled.div`
	width: 70% !important;
	margin: auto;
	text-shadow: 1px 1px #444 !important;
	font-size: 40px;
	font-family: 'Abel', sans-serif;
	display: block;
	margin-bottom: 20px;
	font-weight: bold;
`;

const SecondarySlogan = styled.div`
	font-size: 20px;
	font-family: 'Abel', sans-serif;
	display: block;
	margin-bottom: 40px;
	font-weight: bold;
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

interface IValue {
	icon: string;
	heading: string;
	content: string;
	iconPosition: 'left' | 'right';
}

class Index extends React.Component<any, any> {
	public render() {
		const values: IValue[] = [
			{
				icon: 'th',
				heading: 'Simplicity',
				content: `Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Etiam non dolor eros. Praesent
				ut tempor elit. Suspendisse convallis mauris
				sapien, nec consequat arcu bibendum sed. Nec
				consequat arcu bibendum sed. Lorem ipsum dolor
				sit amet, consectetur adipiscing elit.
				
				Etiam non dolor eros. Praesent ut tempor elit.
				Suspendisse convallis mauris sapien, nec
				consequat arcu bibendum sed. Nec consequat arcu
				bibendum sed.`,
				iconPosition: 'left'
			},
			{
				icon: 'microchip',
				heading: 'Innovation',
				content: `Lorem ipsum dolor sit amet, consectetur
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
				bibendum sed.`,
				iconPosition: 'right'
			},
			{
				icon: 'js',
				heading: 'Elegance',
				content: `Lorem ipsum dolor sit amet, consectetur
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
				bibendum sed.`,
				iconPosition: 'left'
			}
		];

		return (
			<React.Fragment>
				<Jumbotron>
					<Spring
						from={{ opacity: 0, marginTop: 100 }}
						to={{ opacity: 1, marginTop: 0 }}
						config={config.molasses}
					>
						{props => (
							<Slogan style={props}>
								Beautiful & Elegant Consulting Solutions
							</Slogan>
						)}
					</Spring>
					<Spring
						from={{ opacity: 0, marginTop: 100 }}
						to={{ opacity: 1, marginTop: 0 }}
						config={config.molasses}
					>
						{props => (
							<SecondarySlogan style={props}>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry
							</SecondarySlogan>
						)}
					</Spring>
					<Button content="Get A Quote" />
				</Jumbotron>
				<Values>
					{values.map(value => (
						<Value
							icon={value.icon}
							heading={value.heading}
							content={value.content}
							iconPosition={value.iconPosition}
						/>
					))}
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
