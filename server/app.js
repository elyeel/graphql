const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
// const port = 4000;

// allow cross-origin request
app.use(cors());

mongoose.connect(
	`mongodb+srv://${process.env.GQL_USER}:${process.env.GQL_PASS}@cluster0.rw7we.mongodb.net/${process.env.GQL_MONGODB}?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);
mongoose.connection.once('open', () => {
	console.log('connected to database');
});

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.listen(process.env.PORT, () => {
	console.log(`now listening for request on port ${process.env.PORT}`);
});
