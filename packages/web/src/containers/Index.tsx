import React from 'react';

import styled from 'styled-components';

import { config } from 'react-spring';
import { Spring } from 'react-spring/renderprops';
import { ParallaxBanner } from 'react-scroll-parallax';

import { Container, Image } from 'semantic-ui-react';

import Contact from '../components/Contact';
import Jumbotron from '../components/Jumbotron';
import Portfolio from '../components/Portfolio';

import * as tilted from '../assets/tilted2.png';

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

const SFaintHeading = styled.div`
	font-family: 'Oxygen', sans-serif !important;
	color: #ddd !important;
	font-weight: bold !important;
	font-size: 25px;
	margin-bottom: 30px;
`;

const SWhoWeAre = styled.div`
	background: #fff !important;
	box-shadow: 0 4px 10px -6px #eee !important;
	text-align: center;

	padding-top: 70px;
	padding-bottom: 70px;

	& img {
		position: relative;
		display: inline-block !important;
		margin: 0 30px;
		filter: grayscale(100%);
		opacity: 0.6;
		width: 100px !important;
		transition: opacity 0.5s ease-in-out;
	}

	& img:hover {
		filter: grayscale(0%);
		opacity: 1;
		cursor: pointer;
	}
`;

const Index: React.FC<{}> = () => {
	return (
		<React.Fragment>
			<SWhiteCont>
				<Jumbotron />
			</SWhiteCont>
			<SCurve></SCurve>
			<SWhoWeAre>
				<Container fluid={true}>
					<SFaintHeading>We Work With</SFaintHeading>
					<br />
					<div>
						<Image
							src={
								'https://static.djangoproject.com/img/logos/django-logo-positive.svg'
							}
							width={'100'}
						/>
						<Image
							src={
								'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png'
							}
							width={'100'}
						/>
						<Image
							src={
								'https://seeklogo.com/images/S/swift-logo-F41F53A22D-seeklogo.com.png'
							}
							width={'80'}
						/>

						<Image
							src={
								'https://www.vectorlogo.zone/logos/golang/golang-official.svg'
							}
							width={'100'}
						/>
						<Image
							src={
								'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png'
							}
							width={'100'}
						/>
						<Image
							src={
								'http://seekvectorlogo.com/wp-content/uploads/2018/01/blockchain-vector-logo.png'
							}
							width={'180'}
						/>
						<Spring
							from={{ marginTop: 200 }}
							to={{ marginTop: 0 }}
							config={config.molasses}
						>
							{props => (
								<Image
									style={props}
									src={
										'https://cdn.worldvectorlogo.com/logos/react.svg'
									}
									width={'100'}
									config
								/>
							)}
						</Spring>
					</div>
				</Container>
			</SWhoWeAre>
			<Portfolio />
		</React.Fragment>
	);
};

export default Index;
