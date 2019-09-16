const channels = [{
  id: 1,
  name: 'soccer',
}, {
  id: 2,
  name: 'baseball',
}];

let nextId = 3;

const resolvers = {
  Query: {
    channels: () => channels,
  },
  Mutation: {
    addChannel: (root, args) => {
      const newChannel = { id: nextId += 1, name: args.name };
      channels.push(newChannel);
      return newChannel;
    },
  },
};

module.exports = { resolvers };
