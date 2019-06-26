import React from 'react';

import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const Jumbotron = styled.div`
	height: 600px;
`;

const Content = styled.div`
	margin: auto !important;
	text-align: center;
	height: 100%;
	width: 60%;
	line-height: 1.3;
`;

const Slogan = styled.div`
	font-size: 50px;
	font-family: 'Abel', sans-serif;
	display: block;
	padding-top: 13%;
	margin-bottom: 40px;
	font-weight: bold;
`;

const UnderSlogan = styled.div`
	font-size: 20px;
	width: 70%;
	margin: auto;
	color: rgba(80, 74, 149, 1);
	font-family: 'Oxygen', sans-serif;
`;

const JumbotronButtons = styled.div`
	padding: 50px;
`;

class Index extends React.Component<any, any> {
	public render() {
		return (
			<React.Fragment>
				<Jumbotron>
					<Content>
						<Slogan>
							Beautiful & Elegant Consulting Solutions
						</Slogan>
						<UnderSlogan>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Welcome to App Maven!
						</UnderSlogan>
						<JumbotronButtons>
							<Button color="purple" content="Get A Quote" />
						</JumbotronButtons>
					</Content>
				</Jumbotron>
			</React.Fragment>
		);
	}
}

export default Index;
