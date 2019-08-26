import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import * as bg from '../assets/redval3.png';

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

const Jumbotron: React.FC<{}> = () => {
	return (
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
				<Button circular={true} color={'red'} content="Request Quote" />
			</Link>
		</SJumbotron>
	);
};

export default Jumbotron;
