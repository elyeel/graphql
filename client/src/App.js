import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	useQuery
} from '@apollo/client';
import BookList from './components/BookList';
import AddBook from './components/AddBook'

// apollo client setup
const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache()
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div id="main">
				<h1>Risyardi's Reading List with GraphQL</h1>
				<BookList client={client} useQuery={useQuery} />
				<AddBook/>
			</div>
		</ApolloProvider>
	);
}

export default App;
