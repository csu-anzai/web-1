import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Image } from 'semantic-ui-react';

import { IOption, IStore, quote } from '@appmaven/redux';

const OutterWrapper = styled(Container)`
	width: 100% !important;
	height: 100% !important;
	position: relative;
	background-color: #eeeeee;
	padding-left: 50px;
	padding-right: 50px;
`;

const InnerWrapper = styled(Container)`
	/* width: 65% !important; */
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
	color: #959da0;
	padding: 20px;
`;

const OptionImage = styled(Image)`
	padding: 10px;
	margin: auto;
	transition: all 0.2s ease-in-out;
	&:hover {
		cursor: pointer;
		transform: scale(1.1);
	}
`;

const OptionTitle = styled.p`
	color: #424956;
	font-weight: bold;
	padding: 20px;
	text-align: center;
`;

interface IBreakdown {
	title: string;
	subtitle: string;
	option: IOption;
}

type TPLATFORM = 'DESKTOP' | 'MOBILE' | 'WEB';

const Quote: React.FunctionComponent<{}> = props => {
	const [counter, setCounter] = useState<number>(0);
	const [type, setType] = useState<TPLATFORM>();
	const [price, setPrice] = useState<IBreakdown[]>([]);
	const dispatch = useDispatch();

	const options = useSelector<IStore, IOption[]>(
		store => store.quote.options
	);

	const title = useSelector<IStore, string>(store => store.quote.title);

	const subtitle = useSelector<IStore, string>(store => store.quote.subtitle);

	const MAX_COUNTER = 9;

	useEffect(() => {
		switch (counter) {
			case 0:
				dispatch(quote.app());
				break;
			case 1:
				if (type === 'DESKTOP') {
					//
				} else if (type === 'MOBILE') {
					dispatch(quote.mobileType());
				} else if (type === 'WEB') {
					dispatch(quote.webMarketing());
				}
				break;
			case 2:
				if (type === 'DESKTOP') {
					//
				} else if (type === 'MOBILE') {
					dispatch(quote.mobileLogin());
				} else if (type === 'WEB') {
					dispatch(quote.webLogin());
				}

				break;
			case 3:
				if (type === 'DESKTOP') {
					//
				} else if (type === 'MOBILE') {
					dispatch(quote.mobileProfiles());
				} else if (type === 'WEB') {
					dispatch(quote.webProfiles());
				}

				break;
			case 4:
				if (type === 'DESKTOP') {
					//
				} else if (type === 'MOBILE') {
					dispatch(quote.mobilePayments());
				} else if (type === 'WEB') {
					dispatch(quote.webPayments());
				}

				break;
			case 5:
				if (type === 'DESKTOP') {
					//
				} else if (type === 'MOBILE') {
					dispatch(quote.mobileRatings());
				} else if (type === 'WEB') {
					dispatch(quote.webRatings());
				}

				break;
			case 6:
				if (type === 'DESKTOP') {
					//
				} else if (type === 'MOBILE') {
					dispatch(quote.mobileIntegration());
				} else if (type === 'WEB') {
					dispatch(quote.webIntegration());
				}

				break;
			case 7:
				if (type === 'DESKTOP') {
					//
				} else if (type === 'MOBILE') {
					dispatch(quote.mobileUX());
				} else if (type === 'WEB') {
					dispatch(quote.webSearch());
				}
				break;
			case 8:
				if (type === 'DESKTOP') {
					//
				} else if (type === 'MOBILE') {
					dispatch(quote.mobileBranding());
				} else if (type === 'WEB') {
					dispatch(quote.webCMS());
				}
				break;
			case MAX_COUNTER:
				dispatch(quote.done(getPrice()));
				break;
			default:
				setPrice([]);
				setCounter(0);
				break;
		}
	}, [counter]);

	const getPrice = () => {
		let sum = 0;
		for (const item of price.slice(0, counter)) {
			sum += item.option.price;
		}
		return sum;
	};

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
								if (counter < MAX_COUNTER) {
									setCounter(counter - 1);
									setPrice(price.slice(0, counter - 1));
								} else {
									setType(undefined);
									setCounter(0);
									setPrice([]);
								}
							}}
							style={{
								cursor: 'pointer',
								color: '#ed213a'
							}}
						>
							{counter < MAX_COUNTER
								? '\u2190 back'
								: '\u21BB restart'}
						</a>
					</AltTitle>
				</Column>
				<Column>
					<AltTitle style={{ textAlign: 'center' }}>
						App Maven Estimation
					</AltTitle>
				</Column>
				<Column>
					<AltTitle
						style={{
							textAlign: 'right',
							color: '#ed213a',
							display: counter < MAX_COUNTER ? 'block' : 'none'
						}}
					>
						£{getPrice()},00
					</AltTitle>
				</Column>
			</Grid>
			<InnerWrapper>
				<Grid columns={'equal'} textAlign={'center'}>
					<Row>
						<Title>{title}</Title>
					</Row>
					<Row>
						<Subtitle
							style={{
								fontSize: counter === MAX_COUNTER ? 32 : 16,
								color:
									counter === MAX_COUNTER
										? '#ed213a'
										: '#697377'
							}}
						>
							{subtitle}
						</Subtitle>
					</Row>
					<Row
						style={{
							display: counter === MAX_COUNTER ? 'flex' : 'none'
						}}
					>
						{price.map(breakdown => (
							<Column key={breakdown.title}>
								<OptionImage
									size={'small'}
									circular={true}
									src={breakdown.option.image}
								/>
								<OptionTitle
									style={{
										padding: 0,
										fontSize: '10px'
									}}
								>
									{breakdown.option.title}
								</OptionTitle>
							</Column>
						))}
					</Row>
					<Row
						style={{
							justifyContent: 'center',
							display: counter === MAX_COUNTER ? 'flex' : 'none'
						}}
					>
						<OptionImage
							style={{ cursor: 'default', transform: 'none' }}
							disabled={true}
							size={'medium'}
							circular={false}
							src={
								'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSItMzUgMCA1MTEgNTEyIiB3aWR0aD0iMjU2cHgiIGhlaWdodD0iMjU2cHgiPjxwYXRoIGQ9Im0xMDEuOTIxODc1IDQ5Ni4zNDc2NTZjLTEuODU1NDY5IDAtMy43MTA5MzctLjY5NTMxMi01LjE0ODQzNy0yLjA4OTg0NC0yLjkyOTY4OC0yLjg0Mzc1LTMtNy41MjM0MzctLjE1MjM0NC0xMC40NTMxMjRsOS4xODc1LTkuNDY0ODQ0YzIuODQzNzUtMi45Mjk2ODggNy41MjM0MzctMyAxMC40NTMxMjUtLjE1NjI1IDIuOTI5Njg3IDIuODQzNzUgMyA3LjUyMzQzNy4xNTYyNSAxMC40NTMxMjVsLTkuMTkxNDA3IDkuNDY0ODQzYy0xLjQ0OTIxOCAxLjQ5NjA5NC0zLjM3NSAyLjI0NjA5NC01LjMwNDY4NyAyLjI0NjA5NHptMCAwIiBmaWxsPSIjZmY0ZTYxIi8+PHBhdGggZD0ibTIwMS42NDg0MzggMTMzLjI2MTcxOWMtMS44NTE1NjMgMC0zLjcxMDkzOC0uNjk1MzEzLTUuMTQ0NTMyLTIuMDg5ODQ0LTIuOTI5Njg3LTIuODQzNzUtMy03LjUyMzQzNy0uMTU2MjUtMTAuNDQ5MjE5bDkuMTkxNDA2LTkuNDY4NzVjMi44NDM3NS0yLjkyOTY4NyA3LjUxOTUzMi0zIDEwLjQ0OTIxOS0uMTU2MjUgMi45Mjk2ODggMi44NDM3NSAzIDcuNTIzNDM4LjE1NjI1IDEwLjQ1MzEyNWwtOS4xOTE0MDYgOS40Njg3NWMtMS40NDkyMTkgMS40OTIxODgtMy4zNzUgMi4yNDIxODgtNS4zMDQ2ODcgMi4yNDIxODh6bTAgMCIgZmlsbD0iI2ZmNGU2MSIvPjxwYXRoIGQ9Im00MTMuODA0Njg4IDEwMC4zOTA2MjVjLTEuODU1NDY5IDAtMy43MTA5MzgtLjY5MTQwNi01LjE0ODQzOC0yLjA4NTkzNy0yLjkyOTY4OC0yLjg0Mzc1LTMtNy41MjM0MzgtLjE1NjI1LTEwLjQ1MzEyNmw5LjE5MTQwNi05LjQ2ODc1YzIuODQzNzUtMi45MjU3ODEgNy41MjM0MzgtMi45OTYwOTMgMTAuNDUzMTI1LS4xNTIzNDMgMi45Mjk2ODggMi44Mzk4NDMgMyA3LjUyMzQzNy4xNTYyNSAxMC40NDkyMTlsLTkuMTkxNDA2IDkuNDY4NzVjLTEuNDQ5MjE5IDEuNDkyMTg3LTMuMzc1IDIuMjQyMTg3LTUuMzA0Njg3IDIuMjQyMTg3em0wIDAiIGZpbGw9IiM1YzczYmMiLz48cGF0aCBkPSJtNDEzLjgwNDY4OCA0NjMuNzczNDM4Yy0xLjg1NTQ2OSAwLTMuNzEwOTM4LS42OTUzMTMtNS4xNDg0MzgtMi4wODU5MzgtMi45Mjk2ODgtMi44NDM3NS0zLTcuNTIzNDM4LS4xNTYyNS0xMC40NTMxMjVsOS4xOTE0MDYtOS40Njg3NWMyLjg0Mzc1LTIuOTI1NzgxIDcuNTIzNDM4LTMgMTAuNDUzMTI1LS4xNTYyNSAyLjkyOTY4OCAyLjg0Mzc1IDMgNy41MjM0MzcuMTU2MjUgMTAuNDUzMTI1bC05LjE5MTQwNiA5LjQ2ODc1Yy0xLjQ0OTIxOSAxLjQ5MjE4OC0zLjM3NSAyLjI0MjE4OC01LjMwNDY4NyAyLjI0MjE4OHptMCAwIiBmaWxsPSIjZmEwIi8+PHBhdGggZD0ibTYzLjA3MDMxMiAxMTIuOTEwMTU2Yy0xLjg1MTU2MiAwLTMuNzEwOTM3LS42OTE0MDYtNS4xNDQ1MzEtMi4wODU5MzctMi45Mjk2ODctMi44NDM3NS0zLTcuNTIzNDM4LS4xNTYyNS0xMC40NTMxMjVsOS4xOTE0MDctOS40Njg3NWMyLjg0Mzc1LTIuOTI1NzgyIDcuNTIzNDM3LTIuOTk2MDk0IDEwLjQ1MzEyNC0uMTUyMzQ0IDIuOTI1NzgyIDIuODQzNzUgMi45OTYwOTQgNy41MjM0MzguMTUyMzQ0IDEwLjQ0OTIxOWwtOS4xOTE0MDYgOS40Njg3NWMtMS40NDkyMTkgMS40OTIxODctMy4zNzUgMi4yNDIxODctNS4zMDQ2ODggMi4yNDIxODd6bTAgMCIgZmlsbD0iI2ZhMCIvPjxwYXRoIGQ9Im0xMi4zMDg1OTQgMjc4LjgyNDIxOWMtMS44NTE1NjMgMC0zLjcxMDkzOC0uNjkxNDA3LTUuMTQ0NTMyLTIuMDg1OTM4LTIuOTI5Njg3LTIuODQzNzUtMy03LjUyMzQzNy0uMTU2MjUtMTAuNDUzMTI1bDkuMTg3NS05LjQ2ODc1YzIuODQzNzUtMi45Mjk2ODcgNy41MjM0MzgtMyAxMC40NTMxMjYtLjE1NjI1IDIuOTI5Njg3IDIuODQzNzUgMyA3LjUyMzQzOC4xNTYyNSAxMC40NTMxMjVsLTkuMTkxNDA3IDkuNDY4NzVjLTEuNDQ1MzEyIDEuNDkyMTg4LTMuMzc1IDIuMjQyMTg4LTUuMzA0Njg3IDIuMjQyMTg4em0wIDAiIGZpbGw9IiMyZGM0NzEiLz48cGF0aCBkPSJtMjE2LjI5Mjk2OSAyNzguNDkyMTg4LTIzLjk5NjA5NCAxMi45OTYwOTNjLTYuMjIyNjU2IDMuMzcxMDk0LTEzLjQ5NjA5NC0yLjA3NDIxOS0xMi4zMDg1OTQtOS4yMTQ4NDNsNC41ODIwMzEtMjcuNTIzNDM4Yy40NzI2NTctMi44MzU5MzgtLjQzNzUtNS43MjY1NjItMi40Mzc1LTcuNzM0Mzc1bC0xOS40MTQwNjItMTkuNDk2MDk0Yy01LjAzNTE1Ni01LjA1NDY4Ny0yLjI1NzgxMi0xMy44NjMyODEgNC43MDMxMjUtMTQuOTA2MjVsMjYuODI0MjE5LTQuMDE1NjI1YzIuNzY1NjI1LS40MTQwNjIgNS4xNTIzNDQtMi4xOTkyMTggNi4zODY3MTgtNC43ODEyNWwxMi0yNS4wNDI5NjhjMy4xMTMyODItNi40OTIxODggMTIuMTAxNTYzLTYuNDkyMTg4IDE1LjIxNDg0NCAwbDExLjk5NjA5NCAyNS4wNDI5NjhjMS4yMzgyODEgMi41ODIwMzIgMy42MjUgNC4zNjcxODggNi4zODY3MTkgNC43ODEyNWwyNi44MjgxMjUgNC4wMTU2MjVjNi45NTcwMzEgMS4wNDI5NjkgOS43MzQzNzUgOS44NTE1NjMgNC42OTkyMTggMTQuOTA2MjVsLTE5LjQxMDE1NiAxOS40OTYwOTRjLTIgMi4wMDc4MTMtMi45MTQwNjIgNC44OTg0MzctMi40NDE0MDYgNy43MzQzNzVsNC41ODIwMzEgMjcuNTIzNDM4YzEuMTkxNDA3IDcuMTQwNjI0LTYuMDgyMDMxIDEyLjU4NTkzNy0xMi4zMDQ2ODcgOS4yMTQ4NDNsLTIzLjk5NjA5NC0xMi45OTYwOTNjLTIuNDcyNjU2LTEuMzM5ODQ0LTUuNDI1NzgxLTEuMzM5ODQ0LTcuODk0NTMxIDB6bTAgMCIgZmlsbD0iI2ZmZDAyZiIvPjxwYXRoIGQ9Im0yMjAuMjM4MjgxIDUxMmMtNC4wODIwMzEgMC03LjM5MDYyNS0zLjMwODU5NC03LjM5MDYyNS03LjM5MDYyNXYtMTE1LjU5Mzc1YzAtNC4wODIwMzEgMy4zMDg1OTQtNy4zOTQ1MzEgNy4zOTA2MjUtNy4zOTQ1MzFzNy4zOTA2MjUgMy4zMTI1IDcuMzkwNjI1IDcuMzk0NTMxdjExNS41OTM3NWMwIDQuMDgyMDMxLTMuMzA4NTk0IDcuMzkwNjI1LTcuMzkwNjI1IDcuMzkwNjI1em0wIDAiIGZpbGw9IiM1YzczYmMiLz48cGF0aCBkPSJtMjIwLjI5Njg3NSAzNTcuNDIxODc1aC0uMTEzMjgxYy00LjA4MjAzMiAwLTcuMzk0NTMyLTMuMzEyNS03LjM5NDUzMi03LjM5NDUzMSAwLTQuMDgyMDMyIDMuMzA4NTk0LTcuMzkwNjI1IDcuMzk0NTMyLTcuMzkwNjI1aC4xMTMyODFjNC4wODIwMzEgMCA3LjM5MDYyNSAzLjMwODU5MyA3LjM5MDYyNSA3LjM5MDYyNSAwIDQuMDgyMDMxLTMuMzA4NTk0IDcuMzk0NTMxLTcuMzkwNjI1IDcuMzk0NTMxem0wIDAiIGZpbGw9IiM1YzczYmMiLz48cGF0aCBkPSJtMjIwLjI5Njg3NSAzMzEuOTk2MDk0Yy0uMDExNzE5IDAtLjAyMzQzNyAwLS4wMzEyNSAwaC0uMTE3MTg3Yy00LjA4MjAzMi0uMDE1NjI1LTcuMzc1LTMuMzM5ODQ0LTcuMzU5Mzc2LTcuNDIxODc1LjAxOTUzMi00LjA3NDIxOSAzLjMyNDIxOS03LjM1OTM3NSA3LjM5MDYyNi03LjM1OTM3NWguMDM1MTU2LjExMzI4MWM0LjA4MjAzMS4wMTU2MjUgNy4zNzUgMy4zMzk4NDQgNy4zNTkzNzUgNy40MjE4NzUtLjAxNTYyNSA0LjA3MDMxMi0zLjMyNDIxOSA3LjM1OTM3NS03LjM5MDYyNSA3LjM1OTM3NXptMCAwIiBmaWxsPSIjZmEwIi8+PHBhdGggZD0ibTg3LjIzNDM3NSAyMzAuODk0NTMxYy0xLjkyOTY4NyAwLTMuODU1NDY5LS43NS01LjMwNDY4Ny0yLjI0MjE4N2wtNzkuMzM5ODQ0LTgxLjczODI4MmMtMi44NDM3NS0yLjkyOTY4Ny0yLjc3NzM0NC03LjYwOTM3NC4xNTIzNDQtMTAuNDQ5MjE4IDIuOTI5Njg3LTIuODQzNzUgNy42MDkzNzQtMi43NzM0MzggMTAuNDUzMTI0LjE1MjM0NGw3OS4zNDM3NSA4MS43MzgyODFjMi44NDM3NSAyLjkyNTc4MSAyLjc3MzQzOCA3LjYwOTM3NS0uMTU2MjUgMTAuNDQ5MjE5LTEuNDM3NSAxLjM5NDUzMS0zLjI5Mjk2OCAyLjA4OTg0My01LjE0ODQzNyAyLjA4OTg0M3ptMCAwIiBmaWxsPSIjZmY0ZTYxIi8+PHBhdGggZD0ibTExMy45NTMxMjUgMjU4LjUwMzkwNmMtMS44NjMyODEgMC0zLjcyNjU2My0uNjk5MjE4LTUuMTY0MDYzLTIuMTA1NDY4LTIuOTIxODc0LTIuODUxNTYzLTIuOTc2NTYyLTcuNTMxMjUtLjEyNS0xMC40NTMxMjZsLjA4MjAzMi0uMDgyMDMxYzIuODUxNTYyLTIuOTE3OTY5IDcuNTMxMjUtMi45NzY1NjIgMTAuNDUzMTI1LS4xMjEwOTMgMi45MjE4NzUgMi44NTE1NjIgMi45NzY1NjIgNy41MzEyNS4xMjEwOTMgMTAuNDUzMTI0bC0uMDc4MTI0LjA4MjAzMmMtMS40NDkyMTkgMS40ODA0NjgtMy4zNjcxODggMi4yMjY1NjItNS4yODkwNjMgMi4yMjY1NjJ6bTAgMCIgZmlsbD0iI2ZhMCIvPjxwYXRoIGQ9Im0xMzEuNDAyMzQ0IDI3Ni40ODA0NjljLTEuODU1NDY5IDAtMy43MTA5MzgtLjY5NTMxMy01LjE0ODQzOC0yLjA4OTg0NC0yLjkyNTc4MS0yLjg0Mzc1LTIuOTk2MDk0LTcuNTIzNDM3LS4xNTIzNDQtMTAuNDQ5MjE5bC4wNzgxMjYtLjA4NTkzN2MyLjg0NzY1Ni0yLjkyOTY4OCA3LjUyNzM0My0yLjk5NjA5NCAxMC40NTMxMjQtLjE1MjM0NCAyLjkyOTY4OCAyLjg0Mzc1IDMgNy41MjM0MzcuMTU2MjUgMTAuNDUzMTI1bC0uMDgyMDMxLjA4MjAzMWMtMS40NDkyMTkgMS40OTIxODgtMy4zNzUgMi4yNDIxODgtNS4zMDQ2ODcgMi4yNDIxODh6bTAgMCIgZmlsbD0iIzVjNzNiYyIvPjxwYXRoIGQ9Im0zNTMuMjQyMTg4IDIyNy45ODgyODFjLTEuODU1NDY5IDAtMy43MTA5MzgtLjY5MTQwNi01LjE0NDUzMi0yLjA4NTkzNy0yLjkyOTY4Ny0yLjg0Mzc1LTMtNy41MjM0MzgtLjE1NjI1LTEwLjQ1MzEyNWw3OS4zMzk4NDQtODEuNzM0Mzc1YzIuODQzNzUtMi45Mjk2ODggNy41MjM0MzgtMyAxMC40NTMxMjUtLjE1NjI1czMgNy41MjM0MzcuMTU2MjUgMTAuNDUzMTI1bC03OS4zNDM3NSA4MS43MzQzNzVjLTEuNDQ5MjE5IDEuNDkyMTg3LTMuMzc1IDIuMjQyMTg3LTUuMzA0Njg3IDIuMjQyMTg3em0wIDAiIGZpbGw9IiNmYTAiLz48cGF0aCBkPSJtMzI2LjUyMzQzOCAyNTUuNjAxNTYyYy0xLjkxNDA2MyAwLTMuODI0MjE5LS43MzgyODEtNS4yNjk1MzItMi4yMTA5MzdsLS4wODIwMzEtLjA4MjAzMWMtMi44NjMyODEtMi45MTQwNjMtMi44MjAzMTMtNy41OTM3NS4wODk4NDQtMTAuNDUzMTI1IDIuOTE0MDYyLTIuODYzMjgxIDcuNTkzNzUtMi44MjAzMTMgMTAuNDUzMTI1LjA4OTg0M2wuMDgyMDMxLjA4MjAzMmMyLjg1OTM3NSAyLjkxNDA2MiAyLjgyMDMxMyA3LjU5Mzc1LS4wOTM3NSAxMC40NTMxMjUtMS40Mzc1IDEuNDE0MDYyLTMuMzA4NTk0IDIuMTIxMDkzLTUuMTc5Njg3IDIuMTIxMDkzem0wIDAiIGZpbGw9IiNmZjRlNjEiLz48cGF0aCBkPSJtMzA5LjA3NDIxOSAyNzMuNTc4MTI1Yy0xLjkyOTY4OCAwLTMuODU1NDY5LS43NS01LjMwNDY4OC0yLjI0MjE4N2wtLjA4MjAzMS0uMDgyMDMyYy0yLjgzOTg0NC0yLjkyOTY4Ny0yLjc3MzQzOC03LjYwOTM3NS4xNTYyNS0xMC40NTMxMjVzNy42MDkzNzUtMi43NzM0MzcgMTAuNDUzMTI1LjE1MjM0NGwuMDgyMDMxLjA4MjAzMWMyLjgzOTg0NCAyLjkyOTY4OCAyLjc3MzQzOCA3LjYwOTM3NS0uMTU2MjUgMTAuNDUzMTI1LTEuNDM3NSAxLjM5NDUzMS0zLjI5Mjk2OCAyLjA4OTg0NC01LjE0ODQzNyAyLjA4OTg0NHptMCAwIiBmaWxsPSIjZmEwIi8+PHBhdGggZD0ibTMwMC42NTIzNDQgMTE2LjY5MTQwNmMtMS4yNDIxODggMC0yLjUtLjMxMjUtMy42NTIzNDQtLjk3MjY1Ni0zLjU0Njg3NS0yLjAyMzQzOC00Ljc4MTI1LTYuNTM5MDYyLTIuNzU3ODEyLTEwLjA4MjAzMWw1Ni44NjMyODEtOTkuNjUyMzQ0YzIuMDIzNDM3LTMuNTQyOTY5IDYuNTM1MTU2LTQuNzc3MzQ0IDEwLjA4MjAzMS0yLjc1MzkwNiAzLjU0Njg3NSAyLjAyMzQzNyA0Ljc4MTI1IDYuNTM5MDYyIDIuNzU3ODEyIDEwLjA4MjAzMWwtNTYuODYzMjgxIDk5LjY1MjM0NGMtMS4zNjMyODEgMi4zODY3MTgtMy44NTkzNzUgMy43MjY1NjItNi40Mjk2ODcgMy43MjY1NjJ6bTAgMCIgZmlsbD0iIzYyZDM4ZiIvPjxwYXRoIGQ9Im0yODEuNTIzNDM4IDE1MC4zMjgxMjVjLTEuMjkyOTY5IDAtMi41OTc2NTctLjMzNTkzNy0zLjc4OTA2My0xLjA0Njg3NWwtLjA5NzY1Ni0uMDU4NTk0Yy0zLjUtMi4wOTM3NS00LjY0NDUzMS02LjYzMjgxMi0yLjU0Njg3NS0xMC4xMzY3MTggMi4wOTM3NS0zLjUwNzgxMyA2LjYzMjgxMi00LjY0NDUzMiAxMC4xMzY3MTgtMi41NTA3ODJsLjA5NzY1Ny4wNTg1OTRjMy41MDM5MDYgMi4wOTM3NSA0LjY0NDUzMSA2LjYzMjgxMiAyLjU1MDc4MSAxMC4xMzY3MTktMS4zODY3MTkgMi4zMTY0MDYtMy44MzU5MzggMy41OTc2NTYtNi4zNTE1NjIgMy41OTc2NTZ6bTAgMCIgZmlsbD0iI2ZhMCIvPjxwYXRoIGQ9Im0yNjkuMDE1NjI1IDE3Mi4yNDYwOTRjLTEuMzAwNzgxIDAtMi42MTcxODctLjM0Mzc1LTMuODA4NTk0LTEuMDYyNWwtLjA5NzY1Ni0uMDU4NTk0Yy0zLjQ5NjA5NC0yLjEwOTM3NS00LjYyMTA5NC02LjY1MjM0NC0yLjUxNTYyNS0xMC4xNDg0MzggMi4xMDkzNzUtMy40OTYwOTMgNi42NTIzNDQtNC42MTcxODcgMTAuMTQ4NDM4LTIuNTExNzE4bC4wOTc2NTYuMDU4NTk0YzMuNDk2MDk0IDIuMTA5Mzc0IDQuNjIxMDk0IDYuNjUyMzQzIDIuNTExNzE4IDEwLjE0ODQzNy0xLjM4NjcxOCAyLjMwMDc4MS0zLjgzMjAzMSAzLjU3NDIxOS02LjMzNTkzNyAzLjU3NDIxOXptMCAwIiBmaWxsPSIjMmRjNDcxIi8+PHBhdGggZD0ibTEzOS45NjQ4NDQgMTE2LjY5MTQwNmMtMi41NzAzMTMgMC01LjA2NjQwNi0xLjMzOTg0NC02LjQyOTY4OC0zLjczMDQ2OGwtNTYuODYzMjgxLTk5LjY0ODQzOGMtMi4wMjM0MzctMy41NDY4NzUtLjc4OTA2My04LjA1ODU5NCAyLjc1MzkwNi0xMC4wODIwMzEgMy41NDY4NzUtMi4wMjM0MzggOC4wNjI1LS43OTI5NjkgMTAuMDg1OTM4IDIuNzUzOTA2bDU2Ljg2MzI4MSA5OS42NDg0MzdjMi4wMjM0MzggMy41NDY4NzYuNzg5MDYyIDguMDYyNS0yLjc1MzkwNiAxMC4wODU5MzgtMS4xNTYyNS42NjAxNTYtMi40MTQwNjMuOTcyNjU2LTMuNjU2MjUuOTcyNjU2em0wIDAiIGZpbGw9IiM1YzczYmMiLz48cGF0aCBkPSJtMTU5LjA5Mzc1IDE1MC4zMjgxMjVjLTIuNTA3ODEyIDAtNC45NTcwMzEtMS4yNzczNDQtNi4zNDM3NS0zLjU4MjAzMS0yLjEwMTU2Mi0zLjUtLjk2ODc1LTguMDQyOTY5IDIuNTI3MzQ0LTEwLjE0NDUzMmwuMTAxNTYyLS4wNTg1OTNjMy41LTIuMTAxNTYzIDguMDM5MDYzLS45NzI2NTcgMTAuMTQwNjI1IDIuNTI3MzQzIDIuMTA1NDY5IDMuNS45NzI2NTcgOC4wMzkwNjMtMi41MjczNDMgMTAuMTQ0NTMybC0uMDk3NjU3LjA1ODU5NGMtMS4xOTE0MDYuNzE0ODQzLTIuNTAzOTA2IDEuMDU0Njg3LTMuODAwNzgxIDEuMDU0Njg3em0wIDAiIGZpbGw9IiNmZjRlNjEiLz48cGF0aCBkPSJtMTcxLjYwMTU2MiAxNzIuMjQ2MDk0Yy0yLjUgMC00LjkzNzUtMS4yNjU2MjUtNi4zMjgxMjQtMy41NjI1LTIuMTE3MTg4LTMuNDkyMTg4LTEtOC4wMzUxNTYgMi40ODgyODEtMTAuMTUyMzQ0bC4wOTc2NTYtLjA1ODU5NGMzLjQ5NjA5NC0yLjExMzI4MSA4LjAzOTA2My0xIDEwLjE1NjI1IDIuNDkyMTg4IDIuMTEzMjgxIDMuNDkyMTg3IDEgOC4wMzUxNTYtMi40OTIxODcgMTAuMTUyMzQ0bC0uMDk3NjU3LjA1ODU5M2MtMS4xOTkyMTkuNzI2NTYzLTIuNTE5NTMxIDEuMDcwMzEzLTMuODI0MjE5IDEuMDcwMzEzem0wIDAiIGZpbGw9IiNmYTAiLz48cGF0aCBkPSJtNDAyLjE0NDUzMSAzNTcuMjgxMjUtMTUuNTIzNDM3IDExLjYwMTU2MmMtNC4wMjM0MzggMy4wMTE3MTktOS42NTIzNDQtLjA0Mjk2OC05LjUyMzQzOC01LjE2NDA2MmwuNTAzOTA2LTE5Ljc1Yy4wNTA3ODItMi4wMzUxNTYtLjg3MTA5My0zLjk2NDg0NC0yLjQ2ODc1LTUuMTY0MDYybC0xNS41MDc4MTItMTEuNjIxMDk0Yy00LjAyMzQzOC0zLjAxNTYyNS0yLjk0NTMxMi05LjQ3MjY1NiAxLjgyNDIxOS0xMC45Mjk2ODhsMTguMzkwNjI1LTUuNjA5Mzc1YzEuODkwNjI1LS41NzgxMjUgMy4zOTA2MjUtMi4wODIwMzEgNC00LjAxNTYyNWw1LjkzNzUtMTguNzg1MTU2YzEuNTM5MDYyLTQuODc1IDcuODM1OTM3LTUuODEyNSAxMC42NTIzNDQtMS41ODk4NDRsMTAuODYzMjgxIDE2LjI4NTE1NmMxLjEyMTA5MyAxLjY3NTc4MiAyLjk2ODc1IDIuNjc5Njg4IDQuOTQxNDA2IDIuNjc5Njg4bDE5LjE3OTY4Ny4wMTE3MTljNC45NzY1NjMuMDAzOTA2IDcuNzg5MDYzIDUuODgyODEyIDQuNzU3ODEzIDkuOTQ5MjE5bC0xMS42NzU3ODEgMTUuNjcxODc0Yy0xLjIwMzEyNSAxLjYxNzE4OC0xLjU1ODU5NCAzLjczODI4Mi0uOTQ5MjE5IDUuNjcxODc2bDUuOTE3OTY5IDE4Ljc5Njg3NGMxLjUzMTI1IDQuODc1LTMuMDI3MzQ0IDkuNDQ1MzEzLTcuNzE0ODQ0IDcuNzM0Mzc2bC0xOC4wNzgxMjUtNi41OTc2NTdjLTEuODU5Mzc1LS42Nzk2ODctMy45MjU3ODEtLjM3MTA5My01LjUyNzM0NC44MjQyMTl6bTAgMCIgZmlsbD0iI2ZmZDAyZiIvPjxwYXRoIGQ9Im0yNjEuNTA3ODEyIDUxMmMtNC4wODIwMzEgMC03LjM5MDYyNC0zLjMwODU5NC03LjM5MDYyNC03LjM5MDYyNSAwLTU3LjIzMDQ2OSAyMi44MzIwMzEtOTUuOTIxODc1IDQxLjk4NDM3NC0xMTguMzA0Njg3IDIwLjgyODEyNi0yNC4zMzIwMzIgNDEuNjEzMjgyLTM1LjAyMzQzOCA0Mi40ODgyODItMzUuNDY4NzUgMy42NDA2MjUtMS44NDc2NTcgOC4wODk4NDQtLjM5MDYyNiA5LjkzMzU5NCAzLjI1MzkwNiAxLjg0Mzc1IDMuNjM2NzE4LjM5NDUzMSA4LjA3ODEyNS0zLjI0MjE4OCA5LjkyOTY4Ny0uMzEyNS4xNjAxNTctMTkuNSAxMC4xNjQwNjMtMzguMzY3MTg4IDMyLjM5NDUzMS0yNS4yMjY1NjIgMjkuNzE4NzUtMzguMDE1NjI0IDY2LjEyMTA5NC0zOC4wMTU2MjQgMTA4LjE5NTMxMyAwIDQuMDgyMDMxLTMuMzA4NTk0IDcuMzkwNjI1LTcuMzkwNjI2IDcuMzkwNjI1em0wIDAiIGZpbGw9IiNmZjRlNjEiLz48cGF0aCBkPSJtMTAyLjg1NTQ2OSAzOTcuMzUxNTYyIDExLjc2NTYyNSAxNS42MDU0NjljMy4wNTQ2ODcgNC4wNDY4NzUgOS4yODUxNTYgMi43MzA0NjkgMTAuNTQ2ODc1LTIuMjI2NTYybDQuODYzMjgxLTE5LjExMzI4MWMuNS0xLjk2NDg0NCAxLjkxMDE1Ni0zLjU1NDY4OCAzLjc2OTUzMS00LjI0NjA5NGwxOC4wMzkwNjMtNi43MDcwMzJjNC42Nzk2ODctMS43MzgyODEgNS4zOTA2MjUtOC4yNSAxLjIwNzAzMS0xMS4wMTU2MjRsLTE2LjE0MDYyNS0xMC42NzE4NzZjLTEuNjYwMTU2LTEuMTAxNTYyLTIuNjkxNDA2LTIuOTcyNjU2LTIuNzU3ODEyLTUuMDAzOTA2bC0uNjE3MTg4LTE5Ljc1Yy0uMTU2MjUtNS4xMjEwOTQtNS45NDkyMTktNy44MzIwMzEtOS43OTY4NzUtNC41ODU5MzdsLTE0LjgzOTg0NCAxMi41MTU2MjVjLTEuNTMxMjUgMS4yODkwNjItMy41NzgxMjUgMS43MjI2NTYtNS40NzI2NTYgMS4xNTYyNWwtMTguNDIxODc1LTUuNWMtNC43NzczNDQtMS40MjU3ODItOS4wNzAzMTIgMy40MTAxNTYtNy4yNjE3MTkgOC4xODM1OTRsNi45Njg3NSAxOC40MTAxNTZjLjcxODc1IDEuODk0NTMxLjQ4NDM3NSA0LjAzNTE1Ni0uNjI1IDUuNzE4NzVsLTEwLjc2OTUzMSAxNi4zNDc2NTZjLTIuNzkyOTY5IDQuMjQyMTg4LjM0Mzc1IDkuOTM3NSA1LjMxMjUgOS42NDQ1MzFsMTkuMTQ0NTMxLTEuMTQwNjI1YzEuOTcyNjU3LS4xMTcxODcgMy44NzUuNzczNDM4IDUuMDg1OTM4IDIuMzc4OTA2em0wIDAiIGZpbGw9IiNmZmQwMmYiLz48cGF0aCBkPSJtMTc5LjAyMzQzOCA1MTJjLTQuMDgyMDMyIDAtNy4zOTA2MjYtMy4zMDg1OTQtNy4zOTA2MjYtNy4zOTA2MjUgMC0zMC4wNTg1OTQtNi42Nzk2ODctNTcuNTU4NTk0LTE5Ljg1MTU2Mi04MS43MzQzNzUtMS45NTMxMjUtMy41ODU5MzgtLjYyODkwNi04LjA3NDIxOSAyLjk1NzAzMS0xMC4wMjczNDQgMy41ODU5MzgtMS45NTMxMjUgOC4wNzQyMTktLjYyODkwNiAxMC4wMjczNDQgMi45NTMxMjUgMTQuMzYzMjgxIDI2LjM3NSAyMS42NDg0MzcgNTYuMjUzOTA3IDIxLjY0ODQzNyA4OC44MDg1OTQgMCA0LjA4MjAzMS0zLjMwODU5MyA3LjM5MDYyNS03LjM5MDYyNCA3LjM5MDYyNXptMCAwIiBmaWxsPSIjZmEwIi8+PHBhdGggZD0ibTI2OC45MjU3ODEgNTUuODk4NDM4YzAtMTEuMjg1MTU3LTguODgyODEyLTIwLjQzMzU5NC0xOS44MzU5MzctMjAuNDMzNTk0LTEwLjk1NzAzMiAwLTE5LjgzNTkzOCA5LjE0ODQzNy0xOS44MzU5MzggMjAuNDMzNTk0IDAgMTEuMjg1MTU2IDguODc4OTA2IDIwLjQzNzUgMTkuODM1OTM4IDIwLjQzNzUgMTAuOTUzMTI1IDAgMTkuODM1OTM3LTkuMTUyMzQ0IDE5LjgzNTkzNy0yMC40Mzc1em0wIDAiIGZpbGw9IiNmZmQwMmYiLz48cGF0aCBkPSJtMzczLjA3ODEyNSA0NDYuODEyNWMwLTExLjI4NTE1Ni04Ljg3ODkwNi0yMC40MzM1OTQtMTkuODMyMDMxLTIwLjQzMzU5NC0xMC45NTcwMzIgMC0xOS44MzU5MzggOS4xNDg0MzgtMTkuODM1OTM4IDIwLjQzMzU5NHM4Ljg3ODkwNiAyMC40MzM1OTQgMTkuODM1OTM4IDIwLjQzMzU5NGMxMC45NTMxMjUgMCAxOS44MzIwMzEtOS4xNDg0MzggMTkuODMyMDMxLTIwLjQzMzU5NHptMCAwIiBmaWxsPSIjNWM3M2JjIi8+PHBhdGggZD0ibTQ0LjEyODkwNiA0NTAuODU1NDY5YzAtOS4wNTA3ODEtNy4xMjEwOTQtMTYuMzg2NzE5LTE1LjkxMDE1Ni0xNi4zODY3MTktOC43ODUxNTYgMC0xNS45MDYyNSA3LjMzNTkzOC0xNS45MDYyNSAxNi4zODY3MTkgMCA5LjA1NDY4NyA3LjEyMTA5NCAxNi4zOTA2MjUgMTUuOTA2MjUgMTYuMzkwNjI1IDguNzg5MDYyIDAgMTUuOTEwMTU2LTcuMzM1OTM4IDE1LjkxMDE1Ni0xNi4zOTA2MjV6bTAgMCIgZmlsbD0iIzYyZDM4ZiIvPjxwYXRoIGQ9Im04OC4xNzE4NzUgMjg4LjM1MTU2MmMwLTkuMDUwNzgxLTcuMTIxMDk0LTE2LjM4NjcxOC0xNS45MTAxNTYtMTYuMzg2NzE4LTguNzg1MTU3IDAtMTUuOTA2MjUgNy4zMzU5MzctMTUuOTA2MjUgMTYuMzg2NzE4IDAgOS4wNTA3ODIgNy4xMjEwOTMgMTYuMzkwNjI2IDE1LjkwNjI1IDE2LjM5MDYyNiA4Ljc4OTA2MiAwIDE1LjkxMDE1Ni03LjMzOTg0NCAxNS45MTAxNTYtMTYuMzkwNjI2em0wIDAiIGZpbGw9IiM1YzczYmMiLz48ZyBmaWxsPSIjZmY0ZTYxIj48cGF0aCBkPSJtMjEwLjgzOTg0NCAxNi4zOTA2MjVjMC05LjA1NDY4Ny03LjEyMTA5NC0xNi4zOTA2MjUtMTUuOTA2MjUtMTYuMzkwNjI1LTguNzg5MDYzIDAtMTUuOTEwMTU2IDcuMzM1OTM4LTE1LjkxMDE1NiAxNi4zOTA2MjUgMCA5LjA1MDc4MSA3LjEyMTA5MyAxNi4zODY3MTkgMTUuOTEwMTU2IDE2LjM4NjcxOSA4Ljc4NTE1NiAwIDE1LjkwNjI1LTcuMzM1OTM4IDE1LjkwNjI1LTE2LjM4NjcxOXptMCAwIi8+PHBhdGggZD0ibTM2NS4yMjY1NjIgMTUyLjg4MjgxMmMwLTkuMDUwNzgxLTcuMTI1LTE2LjM5MDYyNC0xNS45MTAxNTYtMTYuMzkwNjI0cy0xNS45MTAxNTYgNy4zMzk4NDMtMTUuOTEwMTU2IDE2LjM5MDYyNGMwIDkuMDUwNzgyIDcuMTI1IDE2LjM4NjcxOSAxNS45MTAxNTYgMTYuMzg2NzE5czE1LjkxMDE1Ni03LjMzNTkzNyAxNS45MTAxNTYtMTYuMzg2NzE5em0wIDAiLz48cGF0aCBkPSJtMTM5Ljk1NzAzMSAzMi43NDYwOTRjLTEuODU1NDY5IDAtMy43MTA5MzctLjY5MTQwNi01LjE0ODQzNy0yLjA4OTg0NC0yLjkyOTY4OC0yLjg0Mzc1LTMtNy41MTk1MzEtLjE1NjI1LTEwLjQ0OTIxOWw5LjE5MTQwNi05LjQ2ODc1YzIuODQzNzUtMi45Mjk2ODcgNy41MjM0MzgtMyAxMC40NDkyMTktLjE1NjI1IDIuOTI5Njg3IDIuODQzNzUgMyA3LjUyMzQzOC4xNTYyNSAxMC40NTMxMjVsLTkuMTg3NSA5LjQ2ODc1Yy0xLjQ0OTIxOSAxLjQ5MjE4OC0zLjM3ODkwNyAyLjI0MjE4OC01LjMwNDY4OCAyLjI0MjE4OHptMCAwIi8+PC9nPjwvc3ZnPgo='
							}
						/>
					</Row>

					<Row style={{ paddingTop: 50 }}>
						{options.map(option => (
							<Column key={option.title}>
								<OptionImage
									onClick={() => {
										setCounter(counter + 1);
										price.push({
											option,
											title,
											subtitle
										});
										setPrice(price);
										if (counter < 1) {
											setType(
												option.title.toUpperCase() as TPLATFORM
											);
										}
									}}
									src={option.image}
									size={'medium'}
									circular={true}
								/>
								<OptionTitle>{option.title}</OptionTitle>
							</Column>
						))}
					</Row>
					<Row
						style={{
							display: counter === MAX_COUNTER ? 'block' : 'none'
						}}
					>
						<Subtitle
							style={{
								fontSize: 16
							}}
						>
							We create digital products based on needs, not
							requirements. Check out{' '}
							<a href="/portfolio">some examples of our work</a>.
							<br />
							Contact us on{' '}
							<a
								href={
									'mailto:info@appmaven.io?subject=Inquiry - estimated [£' +
									getPrice() +
									',00]'
								}
							>
								info@appmaven.io
							</a>
						</Subtitle>
					</Row>
				</Grid>
			</InnerWrapper>
			<Grid columns={'equal'}>
				<Column></Column>
				<Column></Column>
				<Column
					style={{
						display: counter === MAX_COUNTER ? 'none' : 'block'
					}}
				>
					<AltTitle
						style={{
							textAlign: 'right',
							paddingTop: '70px'
						}}
					>
						{counter + 1 + ' / ' + MAX_COUNTER}
					</AltTitle>
				</Column>
			</Grid>
		</OutterWrapper>
	);
};

export default Quote;
