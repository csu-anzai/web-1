import React from 'react';

import styled from 'styled-components';

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

const Index: React.FC<{}> = () => {
	return (
		<React.Fragment>
			<SWhiteCont>
				<Jumbotron />
			</SWhiteCont>
			<SCurve></SCurve>
			<Portfolio />
		</React.Fragment>
	);
};

export default Index;
