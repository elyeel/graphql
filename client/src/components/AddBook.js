import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';

// const displayAuthors = (authors) => {
// 	authors.map((author) => <option>{author.name}</option>);
// };

export default function AddBook({ client }) {
	const { loading, error, data } = useQuery(getAuthorsQuery);
	const [ book, setBook ] = useState({ name: '', genre: '', authorId: '' });
	const [
		addBook,
		{ loading: mutationLoading, error: mutationError, data: mutationResult }
	] = useMutation(addBookMutation);

	// console.log(data);
	const valueChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setBook((prev) => ({ ...prev, [name]: value }));
		// console.log(book);
	};

	const submitForm = (e) => {
		e.preventDefault();
		addBook({
			variables: { name: book.name, genre: book.genre, authorId: book.authorId }
		});
		console.log(mutationResult)
	};

	return (
		<form id="add-book" onSubmit={submitForm}>
			<div className="field">
				<label>Book name:</label>
				<input
					type="text"
					onChange={valueChange}
					value={book.name}
					name="name"
				/>
			</div>
			<div className="field">
				<label>Genre:</label>
				<input
					type="text"
					onChange={valueChange}
					value={book.genre}
					name="genre"
				/>
			</div>
			<div className="field">
				<label>Author:</label>
				<select onChange={valueChange} value={book.authorId} name="authorId">
					{loading && <option disabled>loading...</option>}
					<option>Select author</option>
					{/* {this.displayAuthors()} */}
					{data &&
						data.authors.map((author) => (
							<option key={author.id} value={author.id}>
								{author.name}
							</option>
						))}
				</select>
			</div>
			<button>+</button>
		</form>
	);
}
