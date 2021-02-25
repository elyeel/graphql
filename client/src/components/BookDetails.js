import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
	getAuthorsQuery,
	addBookMutation,
  getBookQuery
} from '../queries/queries';

export default function BookList({ client }) {
	const { loading, error, data } = useQuery(getBookQuery);

	// console.log(data);

	return (
		<div id="book-details">
			<p>Output book details here</p>
		</div>
	);
}
