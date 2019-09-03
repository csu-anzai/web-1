import React from 'react';

import styled from 'styled-components';

import { Container, Grid, Image } from 'semantic-ui-react';

import * as port1 from '../assets/redval1.png';

const SWhite = styled.div`
	background: #fff !important;
	padding-top: 50px;
	padding-bottom: 100px;
	box-shadow: 0 4px 10px -6px #eee !important;
`;

const SItem = styled.div`
	padding: 100px 150px;
	width: 100%;
`;

const SGrey = styled.div`
	background: #f4f5f7 !important;
	padding-top: 50px;
	padding-bottom: 100px;
	box-shadow: 0 4px 10px -6px #eee !important;
`;

const Portfolio: React.FC<{}> = () => {
	return (
		<>
			<SGrey>
				<Container fluid={true}>
					<SItem>
						<Grid columns={'equal'}>
							<Grid.Column width={5}></Grid.Column>
							<Grid.Column width={1}></Grid.Column>
							<Grid.Column>
								<Image
									src={
										'https://www.bain.com/globalassets/images/service-icons/capability_customer-strategy-mktg.svg'
									}
									size={'tiny'}
								/>
								<h1>App Development</h1>
								<br />
								Etiam tempus felis ante, et feugiat lacus
								placerat in. Morbi vitae tempus justo. Mauris
								mattis ante non maximus vestibulum. Nunc semper
								ac enim sed auctor. Sed id lacus in turpis
								accumsan consectetur. In iaculis metus eget
								ipsum cursus posuere. Integer et sollicitudin
								mi. Nulla elit nisi, cursus ac pharetra a,
								hendrerit et dui. Etiam tempus felis ante, et
								feugiat lacus placerat in. Morbi vitae tempus
								justo. Mauris mattis ante non maximus
								vestibulum. Nunc semper ac enim sed auctor. Sed
								id lacus in turpis accumsan consectetur. In
								iaculis metus eget ipsum cursus posuere. Integer
								et sollicitudin mi. Nulla elit nisi, cursus ac
								pharetra a, hendrerit et dui. <br />
								<br />
								Phasellus fermentum purus commodo nisi
								vestibulum sodales. Proin dolor lectus,
								hendrerit et nunc sit amet, fermentum malesuada
								tellus. Sed consectetur tellus sit amet risus
								gravida condimentum. Aliquam quis placerat erat.
								Aliquam erat volutpat. Aenean eu tortor eget
								sapien imperdiet venenatis. Etiam tempus felis
								ante, et feugiat lacus placerat in. Morbi vitae
								tempus justo. Mauris mattis ante non maximus
								vestibulum. Nunc semper ac enim sed auctor. Sed
								id lacus in turpis accumsan consectetur. In
								iaculis metus eget ipsum cursus posuere. Integer
								et sollicitudin mi. Nulla elit nisi, cursus ac
								pharetra a, hendrerit et dui.
							</Grid.Column>
						</Grid>
					</SItem>
				</Container>
			</SGrey>
			<SWhite>
				<Container fluid={true}>
					<SItem>
						<Grid columns={'equal'}>
							<Grid.Column>
								<Image
									src={
										'https://www.bain.com/globalassets/images/service-icons/capability_customer-strategy-mktg.svg'
									}
									size={'tiny'}
								/>
								<h1>Web Design</h1>
								<br />
								Etiam tempus felis ante, et feugiat lacus
								placerat in. Morbi vitae tempus justo. Mauris
								mattis ante non maximus vestibulum. Nunc semper
								ac enim sed auctor. Sed id lacus in turpis
								accumsan consectetur. In iaculis metus eget
								ipsum cursus posuere. Integer et sollicitudin
								mi. Nulla elit nisi, cursus ac pharetra a,
								hendrerit et dui. Etiam tempus felis ante, et
								feugiat lacus placerat in. Morbi vitae tempus
								justo. Mauris mattis ante non maximus
								vestibulum. Nunc semper ac enim sed auctor. Sed
								id lacus in turpis accumsan consectetur. In
								iaculis metus eget ipsum cursus posuere. Integer
								et sollicitudin mi. Nulla elit nisi, cursus ac
								pharetra a, hendrerit et dui. <br />
								<br />
								Phasellus fermentum purus commodo nisi
								vestibulum sodales. Proin dolor lectus,
								hendrerit et nunc sit amet, fermentum malesuada
								tellus. Sed consectetur tellus sit amet risus
								gravida condimentum. Aliquam quis placerat erat.
								Aliquam erat volutpat. Aenean eu tortor eget
								sapien imperdiet venenatis. Etiam tempus felis
								ante, et feugiat lacus placerat in. Morbi vitae
								tempus justo. Mauris mattis ante non maximus
								vestibulum. Nunc semper ac enim sed auctor. Sed
								id lacus in turpis accumsan consectetur. In
								iaculis metus eget ipsum cursus posuere. Integer
								et sollicitudin mi. Nulla elit nisi, cursus ac
								pharetra a, hendrerit et dui.
							</Grid.Column>
							<Grid.Column width={1}></Grid.Column>
							<Grid.Column width={5}></Grid.Column>
						</Grid>
					</SItem>
				</Container>
			</SWhite>
			<SGrey>
				<Container fluid={true}>
					<SItem>
						<Grid columns={'equal'}>
							<Grid.Column width={5}></Grid.Column>
							<Grid.Column width={1}></Grid.Column>
							<Grid.Column>
								<Image
									src={
										'https://www.bain.com/globalassets/images/service-icons/capability_customer-strategy-mktg.svg'
									}
									size={'tiny'}
								/>
								<h1>Bespoke Software</h1>
								<br />
								Etiam tempus felis ante, et feugiat lacus
								placerat in. Morbi vitae tempus justo. Mauris
								mattis ante non maximus vestibulum. Nunc semper
								ac enim sed auctor. Sed id lacus in turpis
								accumsan consectetur. In iaculis metus eget
								ipsum cursus posuere. Integer et sollicitudin
								mi. Nulla elit nisi, cursus ac pharetra a,
								hendrerit et dui. Etiam tempus felis ante, et
								feugiat lacus placerat in. Morbi vitae tempus
								justo. Mauris mattis ante non maximus
								vestibulum. Nunc semper ac enim sed auctor. Sed
								id lacus in turpis accumsan consectetur. In
								iaculis metus eget ipsum cursus posuere. Integer
								et sollicitudin mi. Nulla elit nisi, cursus ac
								pharetra a, hendrerit et dui. <br />
								<br />
								Phasellus fermentum purus commodo nisi
								vestibulum sodales. Proin dolor lectus,
								hendrerit et nunc sit amet, fermentum malesuada
								tellus. Sed consectetur tellus sit amet risus
								gravida condimentum. Aliquam quis placerat erat.
								Aliquam erat volutpat. Aenean eu tortor eget
								sapien imperdiet venenatis. Etiam tempus felis
								ante, et feugiat lacus placerat in. Morbi vitae
								tempus justo. Mauris mattis ante non maximus
								vestibulum. Nunc semper ac enim sed auctor. Sed
								id lacus in turpis accumsan consectetur. In
								iaculis metus eget ipsum cursus posuere. Integer
								et sollicitudin mi. Nulla elit nisi, cursus ac
								pharetra a, hendrerit et dui.
							</Grid.Column>
						</Grid>
					</SItem>
				</Container>
			</SGrey>
		</>
	);
};

export default Portfolio;
