import { gql, useQuery } from '@apollo/client';

const getAuthorsQuery = gql`
	{
		authors {
			name
			id
		}
	}
`;

// const displayAuthors = (authors) => {
// 	authors.map((author) => <option>{author.name}</option>);
// };

export default function AddBook({ client }) {
	const { loading, error, data } = useQuery(getAuthorsQuery);

	console.log(data);

	return (
		<form id="add-book">
			<div className="field">
				<label>Book name:</label>
				<input type="text" />
			</div>
			<div className="field">
				<label>Genre:</label>
				<input type="text" />
			</div>
			<div className="field">
				<label>Author:</label>
        <select>
          {loading && <option disabled>loading...</option>}
					<option>Select author</option>
					{/* {this.displayAuthors()} */}
					{data && data.authors.map((author) => <option key={author.id} value={author.id}>{author.name}</option>)}
				</select>
			</div>
			<button>+</button>
		</form>
	);
}
