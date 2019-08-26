import React, { useState } from 'react';

import styled from 'styled-components';

import { Button, Container, Grid } from 'semantic-ui-react';

import Value from '../components/Value';

import * as shapes from '../assets/redval3.png';
import * as tilted from '../assets/tilted2.png';

import * as val1 from '../assets/redval1.png';
import * as val2 from '../assets/redval3.png';
import * as val3 from '../assets/redval3.png';

const Jumbotron = styled.div`
	text-align: center !important;
	padding-top: 16% !important;
	padding-bottom: 21% !important;
	color: #eee !important;
	z-index: 10000;
	background: #011126 url(${shapes}) no-repeat center !important;
	background-size: 100% !important;
	box-shadow: 0px 100px 100px -50px #000011 inset;
	line-height: 1 !important;
	margin-top: -120px;
`;

const Slogan = styled.div`
	width: 70% !important;
	margin: auto;
	text-shadow: 1px 1px #111 !important;
	font-size: 35px;
	font-family: 'Abel', sans-serif;
	display: block;
	margin-bottom: 20px;
	font-weight: bold;
`;

const SecondarySlogan = styled.div`
	font-size: 18px;
	width: 50%;
	margin: auto;
	font-family: 'Abel', sans-serif;
	text-shadow: 1px 1px #111 !important;
	display: block;
	margin-bottom: 40px;
	font-weight: bold;
`;

const Portfolio = styled.div`
	background: #f4f5f7 !important;
	padding-top: 50px;
	padding-bottom: 100px;
`;

const PortfolioItem = styled.div`
	background: #fff;
	box-shadow: 0 4px 10px -6px #eee !important;
	height: 350px;
	width: 100%;
`;

const Contact = styled.div`
	box-shadow: 0 4px 10px -6px #eee !important;
	height: 700px;
	background: #fff;
	padding-top: 50px;
`;

const SBlackCont = styled.div`
	background: #090c02;
`;

const SBlueCont = styled.div`
	background: rgb(16, 28, 46);
`;

const SWhiteCont = styled.div`
	background: #fff;
`;

const SCurve = styled.div`
	background: url(${tilted}) no-repeat !important;
	background-size: 100%;
	height: 250px;
	margin-top: -250px;
`;

const Values = styled.div`
	padding-bottom: 40px !important;
	box-shadow: 0 4px 10px -6px #eee !important;
	background: #fff !important;

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

const SCenter = styled.div`
	text-align: center;
`;

interface IValue {
	image: any;
	heading: string;
	content: string;
	iconPosition: 'left' | 'right';
}

const Index: React.FC<{}> = () => {
	const [values] = useState<IValue[]>([
		{
			image: val1,
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
			image: val2,
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
			image: val3,
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
	]);

	return (
		<React.Fragment>
			<SWhiteCont>
				<Jumbotron>
					<Slogan>
						Beautiful<span>.</span> Elegant. Innovative.
					</Slogan>
					<SecondarySlogan>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Etiam non dolor eros. Praesent ut tempor elit.
						Suspendisse convallis mauris sapien, nec consequat arcu
						bibendum sedLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Etiam non dolor eros.
					</SecondarySlogan>
					<Button
						circular={true}
						color={'red'}
						content="Request Quote"
					/>
				</Jumbotron>
			</SWhiteCont>
			<SCurve></SCurve>
			<SWhiteCont>
				<Values>
					{values.map(value => (
						<Value
							image={value.image}
							heading={value.heading}
							content={value.content}
							iconPosition={value.iconPosition}
						/>
					))}
				</Values>
			</SWhiteCont>
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
			<SBlackCont>
				<Contact>
					<Container>
						<h1>Contact Us</h1>
					</Container>
				</Contact>
			</SBlackCont>
		</React.Fragment>
	);
};

export default Index;
