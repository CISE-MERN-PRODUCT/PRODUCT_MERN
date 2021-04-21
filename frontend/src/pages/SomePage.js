import React from 'react';
import { Jumbotron, Button, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HomePage = () => {
	return (
		<>
			<Row>
				<Jumbotron className="my-3 w-50 fluid bg-light">
					<h1>See latest articles</h1>
					<p>
						This is a simple hero unit, a simple jumbotron-style component for calling
						extra attention to featured content or information.
					</p>
					<p>
						<LinkContainer to="/somewhere">
							<Button variant="primary">Learn more</Button>
						</LinkContainer>
					</p>
				</Jumbotron>
			</Row>
		</>
	);
};

export default HomePage;
