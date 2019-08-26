import React from 'react';

import styled from 'styled-components';

import { Container, Grid } from 'semantic-ui-react';

const SPortfolio = styled.div`
	background: #f4f5f7 !important;
	padding-top: 50px;
	padding-bottom: 100px;
`;

const SItem = styled.div`
	background: #fff;
	box-shadow: 0 4px 10px -6px #eee !important;
	height: 350px;
	width: 100%;
`;
const Portfolio: React.FC<{}> = () => {
	return (
		<SPortfolio>
			<Container>
				<h1>Portfolio</h1>
				<Grid columns="equal">
					<Grid.Column>
						<SItem />
					</Grid.Column>
					<Grid.Column>
						<SItem />
					</Grid.Column>
					<Grid.Column>
						<SItem />
					</Grid.Column>
				</Grid>
				<Grid columns="equal">
					<Grid.Column>
						<SItem />
					</Grid.Column>
					<Grid.Column>
						<SItem />
					</Grid.Column>
					<Grid.Column>
						<SItem />
					</Grid.Column>
				</Grid>
			</Container>
		</SPortfolio>
	);
};

export default Portfolio;
