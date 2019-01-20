const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema/schema');

const app = express();

mongoose.connect('mongodb://bar:test123@ds131583.mlab.com:31583/gql-ninja');
mongoose.connection.once('open', () => {
    console.log('Connected to DB');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));



const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Now listening for requests on port ${PORT}`)
});