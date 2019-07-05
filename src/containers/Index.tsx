import React from 'react';
import styled from 'styled-components';

import { Grid, Button, Icon, Container } from 'semantic-ui-react';

const CenteredGrid = styled(Grid)`
	text-align: center !important;
	padding-top: 15% !important;
	padding-bottom: 15% !important;
	background: url('http://a-bconsulting.com/wp-content/uploads/2015/09/AB-Consulting-purple-backgroundgraphic.png');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	color: #eee !important;
`;

const Slogan = styled.div`
	font-size: 40px;
	font-family: 'Abel', sans-serif;
	display: block;
	margin-bottom: 40px;
	font-weight: bold;
`;

const SecondarySlogan = styled.div`
	font-size: 20px;
	font-family: 'Abel', sans-serif;
	display: block;
	margin-bottom: 40px;
	font-weight: bold;
`;

class Index extends React.Component<any, any> {
	public render() {
		return (
			<React.Fragment>
				<CenteredGrid>
					<Grid.Column>
						<Slogan>
							Beautiful & Elegant Consulting Solutions
						</Slogan>
						<SecondarySlogan>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry
						</SecondarySlogan>
						<Button color="purple" content="Get A Quote" />
					</Grid.Column>
				</CenteredGrid>
				<Container fluid={true} />
			</React.Fragment>
		);
	}
}

export default Index;
