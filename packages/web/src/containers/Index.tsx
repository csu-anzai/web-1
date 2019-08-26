import React, { useState } from 'react';

import styled from 'styled-components';

import { Container } from 'semantic-ui-react';

import Contact from '../components/Contact';
import Jumbotron from '../components/Jumbotron';
import Portfolio from '../components/Portfolio';
import Value from '../components/Value';

import * as tilted from '../assets/tilted2.png';

import * as val1 from '../assets/redval1.png';
import * as val2 from '../assets/redval3.png';
import * as val3 from '../assets/redval3.png';

const SBlackCont = styled.div`
	background: #090c02;
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

const Heading = styled.div`
	text-align: center;
	font-size: 40px;
	font-weight: 300 !important;
	padding-top: 70px;
	font-family: 'Abel', sans-serif;
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
				<Jumbotron />
			</SWhiteCont>
			<SCurve></SCurve>
			<SWhiteCont>
				<Values>
					<Container>
						<Heading>Our Values</Heading>
					</Container>
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
			<Portfolio />
			<SBlackCont>
				<Contact />
			</SBlackCont>
		</React.Fragment>
	);
};

export default Index;
