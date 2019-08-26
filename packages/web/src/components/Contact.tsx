import React from 'react';

import styled from 'styled-components';

import { Container } from 'semantic-ui-react';

const SContact = styled.div`
	box-shadow: 0 4px 10px -6px #eee !important;
	height: 700px;
	background: #fff;
	padding-top: 50px;
`;

const Contact: React.FC<{}> = () => {
	return (
		<SContact>
			<Container>
				<h1>Contact Us</h1>
			</Container>
		</SContact>
	);
};

export default Contact;
