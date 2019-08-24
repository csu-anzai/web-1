import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Image } from 'semantic-ui-react';

const OutterWrapper = styled(Container)`
	position: relative;
	min-height: 500px;
	background-color: #eeeeee;
	margin: 20px;
`;

const InnerWrapper = styled(Container)`
	padding: 100px;
	width: 70% !important;
`;

interface IOption {
	src: string;
	title: string;
	redirect: string;
}

const Quote: React.FunctionComponent<{}> = props => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [subTitle, setSubTitle] = useState('');
	const [options, setOptions] = useState<IOption[]>([]);

	const fetchOptions = useSelector<void, void>(store => console.log('test'));

	useEffect(() => {
		//
	}, [title, subTitle, options]);

	return (
		<OutterWrapper>
			<InnerWrapper>
				<Grid columns={'equal'} textAlign={'center'}>
					<Grid.Row>
						<h1>{title}</h1>
					</Grid.Row>
					<Grid.Row>
						<h3>{subTitle}</h3>
					</Grid.Row>
					<Grid.Row style={{ paddingTop: 50 }}>
						{options.map(option => (
							<Grid.Column>
								<Image
									src={option.src}
									size="small"
									circular={true}
								/>
							</Grid.Column>
						))}
					</Grid.Row>
				</Grid>
			</InnerWrapper>
		</OutterWrapper>
	);
};

export default Quote;
