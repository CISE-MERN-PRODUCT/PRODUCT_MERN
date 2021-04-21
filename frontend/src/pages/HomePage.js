import React from 'react';
import { Jumbotron, Button, Row, Container, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { articles } from '../data/evidence';

const HomePage = () => {
	return (
		<>
			<Container>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Title</th>
							<th>Author</th>
							<th>SE Practice</th>
							<th>Claim</th>
							<th>SE Practice</th>
							<th>Strength of the Evidence</th>
						</tr>
					</thead>

					<tbody>
						{articles.map((article, index) => (
							<tr key={index}>
								<td>{article?.title}</td>
								<td>{article?.author}</td>
								<td>{article.year}</td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</>
	);
};

export default HomePage;
