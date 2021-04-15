export const host =
	process.env.NODE_ENV === 'production'
		? 'https://cise-mern-aldar.herokuapp.com/api/books'
		: 'http://localhost:8082/api/books';
