import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Image } from 'semantic-ui-react';

import { IOption, IStore, quote } from '@appmaven/redux';

const OutterWrapper = styled(Container)`
	position: relative;
	height: 700px;
	width: 90% !important;
	background-color: #eeeeee;
	margin: 20px;
`;

const InnerWrapper = styled(Container)`
	padding: 100px;
	width: 70% !important;
`;

const Row = styled(Grid.Row)`
	text-align: center;
`;

const Column = styled(Grid.Column)`
	text-align: center;
`;

const Title = styled.h1`
	color: #424956;
`;

const Subtitle = styled.h3`
	color: #697377;
`;

const AltTitle = styled.h3`
	color: #697377;
	padding: 20px;
`;

const OptionImage = styled(Image)`
	padding: 10px;
`;
const OptionTitle = styled.p`
	color: #424956;
	font-weight: bold;
	padding: 20px;
	text-align: center;
`;

const Quote: React.FunctionComponent<{}> = props => {
	const [counter, setCounter] = useState(0);
	const [price, setPrice] = useState(0);
	const [lastPrice, setLastPrice] = useState(0);
	const dispatch = useDispatch();

	const options = useSelector<IStore, IOption[]>(
		store => store.quote.options
	);

	const title = useSelector<IStore, string>(store => store.quote.title);

	const subtitle = useSelector<IStore, string>(store => store.quote.subtitle);

	useEffect(() => {
		switch (counter) {
			case 0:
				dispatch(quote.type());
				break;
			case 1:
				dispatch(quote.login());
				break;
			case 2:
				dispatch(quote.profiles());
				break;
			case 3:
				dispatch(quote.payments());
				break;
			case 4:
				dispatch(quote.ratings());
				break;
			case 5:
				dispatch(quote.integration());
				break;
			case 6:
				dispatch(quote.ux());
				break;
			case 7:
				dispatch(quote.branding());
				break;
			case 8:
				dispatch(quote.done(price));
				break;
			default:
				setPrice(0);
				setCounter(0);
				break;
		}
	}, [counter]);

	return (
		<OutterWrapper>
			<Grid columns={'equal'}>
				<Column>
					<AltTitle
						hidden={counter === 0}
						style={{
							textAlign: 'left'
						}}
					>
						<a
							onClick={() => {
								if (counter < 8) {
									setCounter(counter - 1);
									setPrice(price - lastPrice);
								} else {
									setCounter(0);
									setPrice(0);
								}
							}}
							style={{
								cursor: 'pointer'
							}}
						>
							{counter < 8 ? 'back' : 'home'}
						</a>
					</AltTitle>
				</Column>
				<Column>
					<AltTitle style={{ textAlign: 'center' }}>
						App Maven Estimation
					</AltTitle>
				</Column>
				<Column>
					<AltTitle style={{ textAlign: 'right', color: '#4183c4' }}>
						£{price},00
					</AltTitle>
				</Column>
			</Grid>
			<InnerWrapper>
				<Grid columns={'equal'} textAlign={'center'}>
					<Row>
						<Title>{title}</Title>
					</Row>
					<Row>
						<Subtitle>{subtitle}</Subtitle>
					</Row>
					<Row style={{ paddingTop: 50 }}>
						{options.map(option => (
							<Column key={option.title}>
								<OptionImage
									onClick={() => {
										setCounter(counter + 1);
										setLastPrice(option.price);
										setPrice(price + option.price);
									}}
									src={option.image}
									size={'medium'}
									circular={true}
								/>
								<OptionTitle>{option.title}</OptionTitle>
							</Column>
						))}
					</Row>
				</Grid>
			</InnerWrapper>
		</OutterWrapper>
	);
};

export default Quote;
