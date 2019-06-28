import React from 'react';

import styled from 'styled-components';

import { Button, Grid, Icon, Divider } from 'semantic-ui-react';

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
	padding-top: 15%;
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

const IndexPage = styled.div`
	width: 80%;
	margin: auto;
	background: #fff !important;
	/* border-top-left-radius: 30px; */
	/* border-top-right-radius: 30px; */
`;

const CenteredGridColumn = styled(Grid.Column)`
	text-align: center;
	/* background: red; */
	/* border-right: 1px solid white; */
`;

const GridPadding = styled.div`
	padding: 40px 60px;

	& div {
		padding-top: 0px;
	}
`;

const Padding = styled.div`
	padding: 30px;
`;

const Heading = styled.div`
	text-align: center;
`;

const PortfolioItem = styled.div`
	width: 100%;
	height: 100%;
	background: #fafafa;
	padding: 20px;
	height: 400px;
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
				<IndexPage>
					<Grid columns="equal">
						<CenteredGridColumn>
							<GridPadding>
								<Icon name="code" size="big" />
								<h1>Elegant</h1>
								<div>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum is simply dummy text of the printing
									and typesetting industry.
								</div>
							</GridPadding>
						</CenteredGridColumn>
						<CenteredGridColumn>
							<GridPadding>
								<Icon name="modx" size="big" />
								<h1>Beautiful</h1>
								<div>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum is simply dummy text of the printing
									and typesetting industry.
								</div>
							</GridPadding>
						</CenteredGridColumn>
						<CenteredGridColumn>
							<GridPadding>
								<Icon name="bitcoin" size="big" />
								<h1>Competetive Pricing</h1>
								<div>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum is simply dummy text of the printing
									and typesetting industry.
								</div>
							</GridPadding>
						</CenteredGridColumn>
					</Grid>

					<Divider />

					<Padding>
						<Heading>
							<h1>Portfolio</h1>
						</Heading>
						<br />
						<br />
						<Grid columns="equal">
							<Grid.Column>
								<PortfolioItem />
							</Grid.Column>
						</Grid>
					</Padding>
				</IndexPage>
			</React.Fragment>
		);
	}
}

export default Index;
