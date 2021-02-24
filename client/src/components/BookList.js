import { gql, useQuery } from '@apollo/client';

const getBooksQuery = gql`
	{
		books {
			name
			genre
      id
		}
	}
`;

export default function BookList({ client }) {
	const { loading, error, data } = useQuery(getBooksQuery);

	console.log(data);

	return (
		<div>
			<ul id="book-list">
				{loading && <p>Loading .....</p>}
				{error && <li>Error</li>}
				{data && data.books.map((book) => <li key={book.id}>{book.name}</li>)}
				<li>Book Name</li>
			</ul>
		</div>
	);
}
