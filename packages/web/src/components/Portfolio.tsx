import React from 'react';

import styled from 'styled-components';

import { Container, Grid, Image } from 'semantic-ui-react';

import * as port1 from '../assets/redval3.png';

const SWhite = styled.div`
	background: #fff !important;
	padding-top: 50px;
	padding-bottom: 100px;
	box-shadow: 0 4px 10px -6px #eee !important;
`;

const SItem = styled.div`
	padding: 50px 150px;
	width: 100%;
`;

const SImageColumn = styled(Grid.Column)`
	& img {
		object-fit: cover !important;
	}
`;

const SGrey = styled.div`
	padding-bottom: 50px !important;
	background: #f4f5f7 !important;
	padding-top: 50px;
	box-shadow: 0 4px 10px -6px #eee !important;
`;

const Portfolio: React.FC<{}> = () => {
	return (
		<>
			<SGrey>
				<Container fluid={true}>
					<SItem>
						<Grid stackable={true} columns={'equal'}>
							<SImageColumn
								textAlign="center"
								verticalAlign={'middle'}
								width={5}
							>
								<Image
									src={
										'https://www.stickpng.com/assets/images/5cb0633d80f2cf201a4c3253.png'
									}
									width={1000}
								/>
							</SImageColumn>
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
						<Grid stackable={true} columns={'equal'}>
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
							<SImageColumn
								width={8}
								textAlign="center"
								verticalAlign={'middle'}
							>
								<Image
									src={
										'https://www.sccpre.cat/mypng/full/167-1675137_macbook-pro-2018-psd-mockup-macbook-pro-2018.png'
									}
									width={2000}
								/>
							</SImageColumn>
						</Grid>
					</SItem>
				</Container>
			</SWhite>
			<SGrey>
				<Container fluid={true}>
					<SItem>
						<Grid stackable={true} columns={'equal'}>
							<Grid.Column
								textAlign="center"
								verticalAlign={'middle'}
								width={7}
							>
								<Image
									src={
										'http://www.pngmart.com/files/3/Software-PNG-Picture.png'
									}
									width={2000}
								/>
							</Grid.Column>
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
