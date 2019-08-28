const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const { createServer } = require('http');

// We’ll also need to import the schema we just wrote in the schema.js file:
const { schema } = require('./src/schema');

const PORT = 4000;
const app = express();

app.use(cors());
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 GraphQL Express Server ready at port #${PORT}`);
});
