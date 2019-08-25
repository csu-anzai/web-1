import React, { useState } from 'react';

import styled from 'styled-components';

import { Button, Container, Grid } from 'semantic-ui-react';

import Value from '../components/Value';

import * as val1 from '../assets/redval1.png';
import * as val2 from '../assets/redval2.png';
import * as val3 from '../assets/redval3.png';

const Jumbotron = styled.div`
	text-align: center !important;
	padding-top: 17% !important;
	padding-bottom: 17% !important;

	background: #090c02 url(${val3}) no-repeat center !important;
	background-size: 80% !important;
	box-shadow: 0px 100px 100px -90px #090c02 inset;

	color: #eee !important;
	z-index: 10000;

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

const Values = styled.div`
	padding-bottom: 0px !important;
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
	image: any;
	heading: string;
	content: string;
	iconPosition: 'left' | 'right';
}

const Index: React.FC<{}> = () => {
	const [values, _] = useState<IValue[]>([
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
			<Jumbotron>
				<Slogan>
					Beautiful<span>.</span> Elegant. Innovative.
				</Slogan>
				<SecondarySlogan>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Etiam non dolor eros. Praesent ut tempor elit. Suspendisse
					convallis mauris sapien, nec consequat arcu bibendum
					sedLorem ipsum dolor sit amet, consectetur adipiscing elit.
					Etiam non dolor eros.
				</SecondarySlogan>
				<Button color={'red'} content="Request Quote" />
			</Jumbotron>
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
};

export default Index;
