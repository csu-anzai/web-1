import React from 'react';

import styled from 'styled-components';

import { config } from 'react-spring';
import { Spring } from 'react-spring/renderprops';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

import { Container, Image } from 'semantic-ui-react';

import Contact from '../components/Contact';
import Jumbotron from '../components/Jumbotron';
import Portfolio from '../components/Portfolio';

const SBlackCont = styled.div`
	background: #090c02;
`;

const SWhiteCont = styled(ParallaxLayer)`
	background: #fff;
`;

const Layer = styled(ParallaxLayer)``;
const Index: React.FC<{}> = () => {
	let parallax: any;

	return (
		<>
			<Parallax ref={ref => (parallax = ref)} pages={3}>
				<Layer offset={0} speed={0}>
					<Jumbotron />
				</Layer>
				<Layer offset={1} speed={1}>
					<Portfolio />
				</Layer>
			</Parallax>
		</>
	);
};

export default Index;
