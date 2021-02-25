import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

export default function BookList({ client }) {
	const { loading, error, data } = useQuery(getBooksQuery);
	const [ selected, setSelected ] = useState(null);

	// console.log(data);

	return (
		<div>
			<ul id="book-list">
				{loading && <p>Loading .....</p>}
				{error && <li>Error</li>}
				{data &&
					data.books.map((book) => (
						<li key={book.id} onClick={(e) => setSelected(book.id)}>
							{book.name}
						</li>
					))}
			</ul>
			<BookDetails bookId={selected} />
		</div>
	);
}
