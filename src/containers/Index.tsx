import React from 'react';

import styled from 'styled-components';

import { Image } from 'semantic-ui-react';

import * as logo from '../assets/brand/logo_transparent.png';

const Logo = styled(Image)`
	position: absolute;
	left: 50%;
	top: 50%;
	margin-top: 100px;
	margin-left: -200px; /* Half the width */
`;

class Index extends React.Component<any, any> {
	public render() {
		return (
			<React.Fragment>
				<Logo src={logo} width={400} />
			</React.Fragment>
		);
	}
}

export default Index;
