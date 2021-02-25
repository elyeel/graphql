import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';

export default function BookDetails({ bookId }) {
	const [ book, setBook ] = useState(null);
	const {
		loading,
		error,
		data,
		refetch,
		networkStatus
	} = useQuery(getBookQuery, {
		variables: { id: bookId }
	});

	useEffect(
		() => {
			if (data) setBook(data.book);
			// return () => {
			// 	cleanup;
			// };
		},
		[ data ]
	);

	// console.log(bookId, data);

	const displayBookDetails = () => {
		if (book)
			return (
				<div>
					<h2>{book.name}</h2>
					<p>{book.genre}</p>
					<p>{book.author.name} </p>
					<p>All books by this author:</p>
					<ul className="other-books">
						{book.author.books.map((item) => (
              <li key={item.id}>{item.name} </li>
						))}
					</ul>
				</div>
			);
		else return <div>No book selected...</div>;
	};

	return <div id="book-details">{displayBookDetails()}</div>;
}
