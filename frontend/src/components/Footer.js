import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer className="p-3 mb-2 bg-secondary text-white">
			<Container>
				<Row>
					<Col md={4} className="text-center py-3">
						Copyright &copy; SEEDS
					</Col>
					<Col md={4} className="text-center py-3">
						<div>Authors:</div>
						<div>Aldar</div>
						<div>Ashley</div>
						<div>Dale</div>
					</Col>
					<Col md={4} className="text-center py-3">
						Made for CISE AUT
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
