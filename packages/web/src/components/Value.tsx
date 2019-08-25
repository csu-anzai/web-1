import React from 'react';
import styled from 'styled-components';

import { Button, Container, Grid, Image } from 'semantic-ui-react';

const ValueContainer = styled(Container)`
	padding: 100px 0px;
`;

interface Props {
	image: any;
	heading: string;
	content: string;
	iconPosition: 'left' | 'right';
}

const Value: React.FC<Props> = props => {
	return (
		<ValueContainer>
			<Grid columns="equal">
				{props.iconPosition === 'left' ? (
					<Grid.Column width={4}>
						<Image src={props.image} />
					</Grid.Column>
				) : null}
				<Grid.Column>
					<h2>{props.heading}</h2>
					{props.content}
					<br />
					<br />
					Etiam non dolor eros. Praesent ut tempor elit. Suspendisse
					convallis mauris sapien, nec consequat arcu bibendum sed.
					Nec consequat arcu bibendum sed.
					<br />
					<br />
					<Button color="red" content={'Learn More'} />
				</Grid.Column>
				{props.iconPosition === 'right' ? (
					<Grid.Column width={4}>
						<Image src={props.image} />
					</Grid.Column>
				) : null}
			</Grid>
		</ValueContainer>
	);
};

export default Value;
