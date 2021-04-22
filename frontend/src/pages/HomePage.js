import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import Loader from '../components/Loader';
// import { articles } from '../data/evidence';
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap';
import { TiArrowUnsorted } from 'react-icons/ti';

const HomePage = () => {
	const [articles, setArticles] = useState([]);
	const [sortConf, setSortConf] = useState({
		property: 'evidence_strength',
		ascending: true,
	});

	const style = {
		cursor: 'pointer',
	};

	const evidence = ['Strongly Support', 'Weekly Support', 'Weekly Disagree', 'Strongly Disagree'];

	const isSupportive = (evidence) => {
		if (evidence.toLowerCase().includes('support')) {
			return true;
		}

		return false;
	};

	const compare = (articleData1, articleData2, property) => {
		if (property === 'evidence_strength') {
			// console.log(evidence[articleData1[property]]);
			// console.log(evidence[articleData2[property]]);
			return (
				evidence.indexOf(articleData1[property]) - evidence.indexOf(articleData2[property])
			);
		}

		if (articleData1[property] < articleData2[property]) {
			return -1;
		}
		if (articleData1[property] > articleData2[property]) {
			return 1;
		}
		return 0;
	};

	const sortArray = (type) => {
		const sorted = !sortConf.ascending
			? [...articles].sort((a, b) => compare(a, b, type))
			: [...articles].sort((a, b) => compare(b, a, type));

		setSortConf({
			property: type,
			ascending: !sortConf.ascending,
		});
		// console.log(sortParameter);
		console.log(sorted);
		setArticles(sorted);
	};

	// USE EFFECT
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get('/api/articles');

			setArticles(data);
			// return data;
		};
		if (articles.length === 0) {
			fetchData();
		}
	}, [articles]);

	return (
		<>
			<Container>
				<h1 className="my-3">Results</h1>
				{articles.length !== 0 ? (
					<Table striped bordered hover>
						<thead>
							<tr>
								<th
									style={style}
									onClick={() => {
										sortArray('title');
									}}
								>
									Title
									<TiArrowUnsorted className="ml-2"></TiArrowUnsorted>
								</th>
								<th
									style={style}
									onClick={() => {
										sortArray('author');
									}}
								>
									Author
									<TiArrowUnsorted className="ml-2"></TiArrowUnsorted>
								</th>
								<th
									style={style}
									onClick={() => {
										sortArray('year');
									}}
								>
									Year
									<TiArrowUnsorted className="ml-2"></TiArrowUnsorted>
								</th>
								<th
									style={style}
									onClick={() => {
										sortArray('se_practice');
									}}
								>
									SE Practice
								</th>
								<th>Claim</th>
								<th
									style={style}
									onClick={() => {
										sortArray('evidence_strength');
									}}
								>
									Strength
									<TiArrowUnsorted className="ml-2"></TiArrowUnsorted>
								</th>
							</tr>
						</thead>

						<tbody>
							{articles.map((article, index) => (
								<tr key={index}>
									<td>{article?.title}</td>
									<td>{article?.author}</td>
									<td>{article.year ? article.year : 'Unknown'}</td>
									<td>{article.se_practice}</td>
									<td>{article.claim}</td>
									<td
										style={
											isSupportive(article.evidence_strength)
												? {
														color: 'green',
												  }
												: {
														color: 'red',
												  }
										}
									>
										{article.evidence_strength}
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				) : (
					<Loader />
				)}

				{/* <SmartDataTable
					orderedHeaders={[
						'se_practice',
						'author',
						'title',
						'claim',
						'evidence_strength',
					]}
					data={articles}
					sortable
					name="table"
					className="ui compact selectable table table table-striped table-bordered table-hover"
					headers={headers}
				></SmartDataTable> */}
			</Container>
		</>
	);
};

export default HomePage;
