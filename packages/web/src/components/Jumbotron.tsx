import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Button, Container, Image } from 'semantic-ui-react';

import Header from '../components/Header';

import * as bg from '../assets/shapes.png';
import * as tilted from '../assets/tilted2.png';

const SJumbotron = styled.div`
	text-align: center !important;
	padding-top: 16% !important;
	padding-bottom: 21% !important;
	color: #eee !important;
	z-index: 10000;
	background: #011126 url(${bg}) no-repeat center !important;
	background-size: 100% !important;
	box-shadow: 0px 100px 100px -50px #000011 inset;
	line-height: 1 !important;
	margin-top: -120px;
	/* height: 100vh; */
`;

const SSlogan = styled.div`
	width: 70% !important;
	margin: auto;
	text-shadow: 1px 1px #111 !important;
	font-size: 35px;
	font-family: 'Abel', sans-serif;
	display: block;
	margin-bottom: 20px;
	font-weight: bold;
`;

const SSecondSlogan = styled.div`
	font-size: 18px;
	width: 50%;
	margin: auto;
	font-family: 'Abel', sans-serif;
	text-shadow: 1px 1px #111 !important;
	display: block;
	margin-bottom: 40px;
	font-weight: bold;
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
`;

const SWhoWeAre = styled.div`
	background: #fff !important;
	/* box-shadow: 0 4px 10px -6px #eee !important; */
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

const Jumbotron: React.FC<{}> = () => {
	return (
		<>
			<Header />
			<SJumbotron>
				<SSlogan>
					Simplicity<span>.</span> Innovative. Elegance.
				</SSlogan>
				<SSecondSlogan>
					Our IT consulting service helps define your business’ IT
					strategy. IT moves at a lightning pace and our consulting
					services will ensure that the right technology and the right
					strategy is used within your business to deliver the most
					effective approach to IT.
				</SSecondSlogan>
				<Link to={'/quote'}>
					<Button
						circular={true}
						color={'red'}
						content="Request Quote"
					/>
				</Link>
			</SJumbotron>
			<SCurve />
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
								'https://www.vectorlogo.zone/logos/golang/golang-official.svg'
							}
							width={'100'}
						/>
						<Image
							src={
								'https://cdn.worldvectorlogo.com/logos/react.svg'
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
								'https://zdnet3.cbsistatic.com/hub/i/2019/08/22/5e05c9d9-27a7-4691-93fa-257717df6582/b96f965a7dee5ea340da1f48eb61a146/android-logo-stacked-rgb.jpg'
							}
							width={'100'}
						/>
						<Image
							src={
								'data:image/png;base64,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'
							}
							width={'100'}
						/>
						<Image
							src={
								'http://seekvectorlogo.com/wp-content/uploads/2018/01/blockchain-vector-logo.png'
							}
							width={'180'}
						/>
					</div>
				</Container>
			</SWhoWeAre>
		</>
	);
};

export default Jumbotron;
