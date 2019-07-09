import React from 'react';
import styled from 'styled-components';

import { Spring, config } from 'react-spring/renderprops';
import { Grid, Container, Icon } from 'semantic-ui-react';

const ValueContainer = styled(Container)`
	padding: 100px;
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
