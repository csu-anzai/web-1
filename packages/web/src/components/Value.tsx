import React from 'react';
import styled from 'styled-components';

import { config, Spring } from 'react-spring/renderprops';
import { Container, Grid, Icon } from 'semantic-ui-react';

const ValueContainer = styled(Container)`
	padding: 100px 50px;
`;

const ColouredIcon = styled(Icon)`
	color: #aa251c !important;
`;

interface IProps {
	icon: string;
	heading: string;
	content: string;
	iconPosition: 'left' | 'right';
}

class Value extends React.Component<IProps, {}> {
	public render() {
		const { icon, heading, content, iconPosition } = this.props;

		return (
			<Spring
				from={{ opacity: 0, marginBottom: 200 }}
				to={{ opacity: 1, marginBottom: 0 }}
				config={config.molasses}
			>
				{props => (
					<ValueContainer style={props}>
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
								Suspendisse convallis mauris sapien, nec
								consequat arcu bibendum sed. Nec consequat arcu
								bibendum sed.
							</Grid.Column>
							{iconPosition === 'right' ? (
								<Grid.Column width={3}>
									<ColouredIcon name={icon} size="massive" />
								</Grid.Column>
							) : null}
						</Grid>
					</ValueContainer>
				)}
			</Spring>
		);
	}
}

export default Value;
