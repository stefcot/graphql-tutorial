const channels = [{
  id: 1,
  name: 'soccer',
}, {
  id: 2,
  name: 'baseball',
}];

const resolvers = {
  Query: {
    channels: () => channels,
  },
};

module.exports = { resolvers };
