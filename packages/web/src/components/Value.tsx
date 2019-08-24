import React from 'react';
import styled from 'styled-components';

import { Container, Grid, Icon } from 'semantic-ui-react';

const ValueContainer = styled(Container)`
	padding: 100px 50px;
`;

const ColouredIcon = styled(Icon)`
	color: #aa251c !important;
`;

interface Props {
	icon: string;
	heading: string;
	content: string;
	iconPosition: 'left' | 'right';
}

class Value extends React.Component<Props, {}> {
	public render() {
		const { icon, heading, content, iconPosition } = this.props;

		return (
			<ValueContainer>
				<Grid columns="equal">
					{iconPosition === 'left' ? (
						<Grid.Column width={3}>
							<ColouredIcon name={icon} size="massive" />
						</Grid.Column>
					) : null}
					<Grid.Column>
						<h2>{heading}</h2>
						{content}
						<br />
						<br />
						Etiam non dolor eros. Praesent ut tempor elit.
						Suspendisse convallis mauris sapien, nec consequat arcu
						bibendum sed. Nec consequat arcu bibendum sed.
					</Grid.Column>
					{iconPosition === 'right' ? (
						<Grid.Column width={3}>
							<ColouredIcon name={icon} size="massive" />
						</Grid.Column>
					) : null}
				</Grid>
			</ValueContainer>
		);
	}
}

export default Value;
